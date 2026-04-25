import { Component, OnDestroy, OnInit, signal, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
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

@Component({
  selector: 'main-live-journal',
  imports: [MatFormField, MatInput, MatTabGroup, MatTab, FormsModule],
  templateUrl: './main-live-journal.html',
  styleUrl: './main-live-journal.scss',
})
export class MainLiveJournal implements OnInit, OnChanges, OnDestroy {
  @Input() child!: Child;

  private journalSocket = new WebsocketService;
  private differ = new textDiff();
  private operationalTransformer = new operationalTransformation();
  private journalService = inject(JournalService);

  text = signal('');
  prevText = '';

  serverRevision = 0;
  sequence = 0;

  inFlight: WsJournalWriteOperation[] = [];

  ngOnInit() {
    const roomDest = 'journal:' + this.child.id + ':' + new Date().toISOString().split('T')[0];
    this.journalSocket.connect(`${environment.wsUrl}/ws`, roomDest);

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
    return msg.userId.toString() === localStorage.getItem('UserId') && this.inFlight.length > 0;
  }

  applyToLocalContent(incoming: WsJournalWriteOperation): void {
    const text: string = this.text();
    const pos: number = incoming.position;
    switch(incoming.type) {
      case 'INSERT':
        this.text.set(text.slice(0, pos) + incoming.text + text.slice(pos, text.length));
        break;
      case 'DELETE':
        this.text.set(text.slice(0, pos) + text.slice(pos + 1, text.length));
        break;
    }
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

      const roomDest = 'journal:' + this.child.id + ':' + new Date().toISOString().split('T')[0];
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
    const diff: Diff = this.differ.getDiff(this.prevText, newValue);
    this.text.set(newValue);
    let operation: WsJournalWriteOperation;
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

    const message: WsJournalMessage = {
      clientRevision: this.serverRevision,
      operation: operation,
      sequence: this.sequence
    }

    this.inFlight.push(operation);

    this.journalSocket.sendJournalUpdate(message);
  }
}
