import { Component, OnDestroy, signal, inject, viewChild, ElementRef, model, OnInit, OnChanges, effect, AfterViewInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { WsJournalWriteOperation, WebsocketService, WsJournalMessage, WsJournalResponse, WsMailbox } from '../../../core/websocket/websocket.service';
import { Child } from '../../../core/child/child.service';
import { textDiff, Diff } from './text-diff';
import { operationalTransformation } from './operational-transformation';
import { JournalService } from '../../../core/journal/journal.service';
import { localDateToday } from '../../../core/utils/date-utils';
import { groupResponse } from '../../../core/groups/group.service';
import { MainCaretTracker } from "./main-caret-tracker/main-caret-tracker";

@Component({
  selector: 'main-live-journal',
  imports: [MatFormField, MatInput, FormsModule, MainCaretTracker],
  templateUrl: './main-live-journal.html',
  styleUrl: './main-live-journal.scss',
})
export class MainLiveJournal implements OnDestroy, OnInit, OnChanges, AfterViewInit{
  private journalSocket = inject(WebsocketService);
  private differ = new textDiff();
  private operationalTransformer = new operationalTransformation();
  private journalService = inject(JournalService);
  private textArea = viewChild.required<ElementRef<HTMLTextAreaElement>>("journalContent");
  private caretTracker = viewChild.required<MainCaretTracker>("tracker");

  childSignal = model.required<Child>();
  contentSignal = model.required<string>();
  groupSignal = model.required<groupResponse>();

  journalScrollTop = signal<number>(0);

  async ngOnInit() {
    await this.journalSocket.ensureConnected();
    this.journalSocket.getMessages(WsMailbox.journal).subscribe(data => {
      const response = data as WsJournalResponse;
      let incoming = response.operation;

      if (this.isMyOwnAck(response)) {
        this.inFlight.shift();
        this.caretTracker().updateCaret(response.userId, this.text(), incoming.position);
      } else {
        for (const myOp of this.inFlight) {
          incoming = this.operationalTransformer.transformClient(incoming, myOp);
        }
        this.applyToLocalContent(incoming);
        this.caretTracker().updateCaret(response.userId, this.text(), incoming.position);
      }
      this.serverRevision = response.serverRevision;
    });
    this.loadJournal();
  }

  ngOnChanges() {
    const roomDest = this.getRoom();
    this.journalSocket.setJournalRoom(roomDest);
    this.loadJournal();
  }

  ngAfterViewInit(): void {
    this.caretTracker().updateCanvasEm(this.textArea().nativeElement);
  }

  text = signal('');
  prevText = '';

  serverRevision = 0;
  sequence = 0;

  inFlight: WsJournalWriteOperation[] = [];

  getRoom(): string {
    if (this.contentSignal() === 'childView') {
      return 'journal:child:' + this.childSignal().id + ':' + localDateToday();
    } else {
      return 'journal:group:' + this.groupSignal().id + ':' + localDateToday();
    }
  }

  isMyOwnAck(msg: WsJournalResponse): boolean {
    return msg.userId.toString() === sessionStorage.getItem('UserId') && this.inFlight.length > 0;
  }

  loadJournal() {
    this.journalService.getJournal(this.childSignal().id, this.groupSignal().id, this.contentSignal()).subscribe({
      next: (data) => {
        this.text.set(data.content);
        this.serverRevision = data.serverRevision;
        this.sequence = 0;
        this.inFlight = [];
      }
    });
  }

  applyToLocalContent(incoming: WsJournalWriteOperation): void {
    //const text: string = this.text();
    const pos: number = incoming.position;
    switch (incoming.type) {
      case 'INSERT':
        //this.text.set(text.slice(0, pos) + incoming.text + text.slice(pos, text.length));
        this.textArea().nativeElement.setRangeText(incoming.text, pos, pos, "preserve");
        break;
      case 'DELETE':
        //this.text.set(text.slice(0, pos) + text.slice(pos + 1, text.length));
        this.textArea().nativeElement.setRangeText("", pos, pos + incoming.length, "preserve");
        break;
    }
    this.text.set(this.textArea().nativeElement.value);
    this.prevText = this.text();
  }

  ngOnDestroy() {
    this.journalSocket.leaveJournalRoom();
  }

  onInput(event: Event) {
    this.sequence++;
    // hämta information om textytan
    const textarea = event.target as HTMLTextAreaElement;

    // hämta senaste verisionen och uppdatera föregående
    const newValue = textarea.value;
    this.prevText = this.text();
    const idx = textarea.selectionStart;
    const diff: Diff = this.differ.getDiff(this.prevText, newValue, idx);
    this.text.set(newValue);
    let operation: WsJournalWriteOperation;
    switch (diff.operation) {
      case 'DELETE':
        operation = {
          type: 'DELETE',
          position: diff.idx,
          length: diff.length
        }
        break;
      case 'INSERT':
        operation = {
          type: 'INSERT',
          position: diff.idx,
          text: diff.value
        }
        break;
      case 'REPLACEMENT':
        operation = {
          type: 'DELETE',
          position: diff.idx,
          length: diff.length
        }
        this.sendOperation(operation);
        this.sequence++;
        operation = {
          type: 'INSERT',
          position: diff.idx,
          text: diff.value
        }
        break;
    }

    this.sendOperation(operation);
    this.caretTracker().updateCaret(parseInt(sessionStorage.getItem("UserId")!), this.text(), this.textArea().nativeElement.selectionStart);
  }

  sendOperation(operation: WsJournalWriteOperation) {
    const message: WsJournalMessage = {
      clientRevision: this.serverRevision,
      operation: operation,
      sequence: this.sequence
    }

    this.inFlight.push(operation);

    this.journalSocket.sendJournalUpdate(message);
  }

  onScroll() {
    this.journalScrollTop.set(this.textArea().nativeElement.scrollTop);
    console.log(this.journalScrollTop());
    this.caretTracker().refitCarets();
  }

  onResize() {
    console.log("Resize");
    this.caretTracker().updateCanvasEm(this.textArea().nativeElement);
    this.caretTracker().refitCarets();
  }

  constructor() {
    effect(() => {
      this.text();
      this.onScroll();
    });
  }
}
