import { Component, OnDestroy, signal, inject, viewChild, ElementRef, model, computed, effect } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTabGroup, MatTab } from "@angular/material/tabs";
import { FormsModule } from '@angular/forms';
import { WsJournalWriteOperation, WebsocketService, WsJournalMessage, WsJournalResponse } from '../../../core/websocket/websocket.service';
import { Child } from '../../../core/child/child.service';
import { textDiff, Diff } from './text-diff';
import { operationalTransformation } from './operational-transformation';
import { JournalService } from '../../../core/journal/journal.service';
import { environment } from '../../../../environments/environment';
import { localDateToday } from '../../../core/utils/date-utils';
import { groupResponse } from '../../../core/groups/group.service';

@Component({
  selector: 'main-live-journal',
  imports: [MatFormField, MatInput, MatTabGroup, MatTab, FormsModule],
  templateUrl: './main-live-journal.html',
  styleUrl: './main-live-journal.scss',
})
export class MainLiveJournal implements OnDestroy {

  private initialized = false;
  
  private journalSocket = new WebsocketService;
  private differ = new textDiff();
  private operationalTransformer = new operationalTransformation();
  private journalService = inject(JournalService);
  private textArea = viewChild.required<ElementRef<HTMLTextAreaElement>>("journalContent");

  childSignal = model.required<Child>();
  contentSignal = model.required<string>();
  groupSignal = model.required<groupResponse>();

  reportTitle = computed(() => {
    switch(this.contentSignal()) {
      case('childView'):
        return this.childSignal().name + 's' + ' dagsrapport';
      case('groupView'):
        return this.groupSignal().name + 's' + ' dagsrapport';
      default:
        return 'ERROR'
    }
  })

  constructor() {
    this.journalSocket.getMessages().subscribe(data => {
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

    effect(() => {
      
      this.loadJournal();
      const roomDest = this.getRoom();

      if (!this.initialized) {
        this.journalSocket.connect(`${environment.wsUrl}/ws`, roomDest);
        this.initialized = true;
      } else {
        this.journalSocket.changeRoom(roomDest); 
      }
    });
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
        console.log(data);
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
    switch(incoming.type) {
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
    this.journalSocket.disconnect();
  }

  onInput(event: Event) {
    this.sequence++;
    // hämta information om textytan
    const textarea = event.target as HTMLTextAreaElement;

    // hämta senaste verisionen och uppdatera föregående
    const newValue = textarea.value;
    this.prevText = this.text();
    const idx = textarea.selectionStart;
    console.log("indexet här är:", idx);
    const diff: Diff = this.differ.getDiff(this.prevText, newValue, idx);
    this.text.set(newValue);
    let operation: WsJournalWriteOperation;
    switch (diff.operation) {
      case 'DELETE':
        operation = {
          type: 'DELETE',
          position: diff.idx,
          length: parseInt(diff.value)
        }
        break;
      case 'INSERT':
        operation = {
          type: 'INSERT',
          position: diff.idx,
          text: diff.value
        }
        break;
    }

    const message: WsJournalMessage = {
      clientRevision: this.serverRevision,
      operation: operation,
      sequence: this.sequence
    }

    this.inFlight.push(operation);

    this.journalSocket.sendJournalUpdate(message);
  }
}
