import { Component, OnDestroy, OnInit, signal, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTabGroup, MatTab } from "@angular/material/tabs";
import { FormsModule } from '@angular/forms';
import { operation, WebsocketService, WsJournalMessage, WsJournalResponse } from '../../../core/websocket/websocket.service';
import { Child } from '../../../core/child/child.service';
import { textDiff, Diff } from './textDiff';
import { operationalTransformation } from './operationalTransformation';
import { JournalService } from '../../../core/journal/journal.service';

@Component({
  selector: 'main-live-journal',
  imports: [MatFormField, MatInput, MatTabGroup, MatTab, FormsModule],
  templateUrl: './main-live-journal.html',
  styleUrl: './main-live-journal.scss',
})
export class MainLiveJournal {
  private journalSocket = new WebsocketService;
  private differ = new textDiff();
  private operationalTransformer = new operationalTransformation();
  private journalService = inject(JournalService);

  text = signal('');
  prevText = '';

  serverRevision = 0;
  sequence = 0;

  inFlight: operation[] = [];

  ngOnInit() {
    let roomDest = 'journal:' + this.child.id + ':' + new Date().toISOString().split('T')[0];
    this.journalSocket.connect("ws://localhost:8080/ws", roomDest);

    this.journalSocket.getMessages().subscribe(data => {
      console.log(this.inFlight);
      console.log("recieved: ", data)
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
  }

  isMyOwnAck(msg: WsJournalResponse): boolean {
    // TODO: myId ännu inte implementerat
    return true;
    //return msg.userId === myID && this.inFlight.length > 0;
  }

  applyToLocalContent(incoming: operation): void {

  }

  ngOnChanges(changes: SimpleChanges): void {  
    if (changes['child'] && !changes['child'].firstChange) {
      this.journalService.getJournal(this.child.id).subscribe({
        next: (data) => {
          console.log(data);
          this.text.set(data.content);
          this.serverRevision = data.serverRevision;
          this.sequence = 0;
          this.inFlight = [];
        }
      });

      let roomDest = 'journal:' + this.child.id + ':' + new Date().toISOString().split('T')[0];
      console.log(roomDest);
      this.journalSocket.changeRoom(roomDest);
      this.prevText = '';
    }
  }

  ngOnDestroy() {
    this.journalSocket.disconnect();
  }

  onInput(event: Event) {
    this.sequence++;

    const newValue = (event.target as HTMLTextAreaElement).value;
    this.prevText = this.text();
    let diff: Diff = this.differ.getDiff(this.prevText, newValue);
    this.text.set(newValue);
    let operation;
    switch (diff.operation) {
      case 'DELETE':
        operation = {
          type: 'DELETE',
          position: diff.idx,
          length: 1
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

    const message = {
      type: "DOC_OPERATION",
      room: 'journal:' + this.child.id + ':' + new Date().toISOString().split('T')[0],
      clientRevision: this.serverRevision,
      operation: operation,
      sequence: this.sequence
    }

    this.inFlight.push(operation as operation);

    this.journalSocket.sendMessageJournal(message as WsJournalMessage);
  }
}
