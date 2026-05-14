import { Component, OnDestroy, signal, inject, viewChild, ElementRef, model, OnInit, OnChanges, effect } from '@angular/core';
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
export class MainLiveJournal implements OnDestroy, OnInit, OnChanges {
  private journalSocket = inject(WebsocketService);
  private differ = new textDiff();
  private operationalTransformer = new operationalTransformation();
  private journalService = inject(JournalService);
  private textArea = viewChild.required<ElementRef<HTMLTextAreaElement>>("journalContent");
  private hidden = viewChild.required<ElementRef<HTMLDivElement>>("hidden");
  hiddenPreSpan = signal<string>("");
  hiddenSpan = viewChild.required<ElementRef<HTMLSpanElement>>("hiddenSpan");
  hiddenPostSpan = signal<string>("");
  private canvasElement = viewChild.required<ElementRef<HTMLCanvasElement>>("canvas");
  mirrorContent = signal<string>("");

  childSignal = model.required<Child>();
  contentSignal = model.required<string>();
  groupSignal = model.required<groupResponse>();

  async ngOnInit() {
    await this.journalSocket.ensureConnected();
    this.journalSocket.getMessages(WsMailbox.journal).subscribe(data => {
      const response = data as WsJournalResponse;
      let incoming = response.operation;

      if (this.isMyOwnAck(response)) {
        this.inFlight.shift();
      } else {
        for (const myOp of this.inFlight) {
          incoming = this.operationalTransformer.transformClient(incoming, myOp);
        }
        this.applyToLocalContent(incoming);
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

  findRelativeOrigin() {
    const element: HTMLDivElement = this.hidden().nativeElement;
    return {
      x: element.getBoundingClientRect().x,
      y: element.getBoundingClientRect().y + parseInt(window.getComputedStyle(element)['paddingTop'].replace("px", "")),
    }
  }

  constructor() {
    effect(() => {
      const wholeText = this.text();
      const firstPart = wholeText.substring(0, this.textArea().nativeElement.selectionStart)
      const secondPart = wholeText.substring(this.textArea().nativeElement.selectionStart);
      this.hiddenPreSpan.set(firstPart);
      this.hiddenPostSpan.set(secondPart);
      //this.hidden().nativeElement.innerHTML = firstPart;
      //this.hiddenSpan().nativeElement.innerHTML = secondPart;
      const canvasElement = this.canvasElement().nativeElement;
      canvasElement.width = canvasElement.getBoundingClientRect().width;
      canvasElement.height = canvasElement.getBoundingClientRect().height;
      const em = parseFloat(getComputedStyle(this.textArea().nativeElement).fontSize);
      const canvasContext = canvasElement.getContext("2d");
      const spanElement = this.hiddenSpan().nativeElement;
      canvasContext!.reset();
      canvasContext!.fillStyle = "blue";
      canvasContext!.fillRect(spanElement.offsetLeft, spanElement.offsetTop, 3, em)

    })
  }
}
