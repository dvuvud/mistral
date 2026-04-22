import { Component, OnDestroy, OnInit, signal, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTabGroup, MatTab } from "@angular/material/tabs";
import { FormsModule } from '@angular/forms';
import { WebsocketService, WsJournalMessage } from '../../../core/websocket/websocket.service';
import { Child } from '../../../core/child/child.service';
import { textDiff, Diff } from './textDiff';
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
  private journalService = inject(JournalService);

  text = signal('');
  prevText = '';

  serverRevision = 0;

  sequence = 0;

  ngOnInit() {
    let roomDest = 'journal:' + this.child.id + ':' + new Date().toISOString().split('T')[0];
    this.journalSocket.connect("ws://localhost:8080/ws", roomDest);

    this.journalSocket.getMessages().subscribe(data => {
      console.log(data);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {  
    if (changes['child'] && !changes['child'].firstChange) {
      this.journalService.getJournal(this.child.id).subscribe({
        next: (data) => {
          console.log(data);
          this.text.set(data.content);
          this.serverRevision = data.serverRevision;
          this.sequence = 0;
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

    this.journalSocket.sendMessageJournal(message as WsJournalMessage);
  }
}
