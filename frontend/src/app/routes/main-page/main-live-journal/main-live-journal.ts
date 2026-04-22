import { Component, OnDestroy, OnInit, signal, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTabGroup, MatTab } from "@angular/material/tabs";
import { FormsModule } from '@angular/forms';
import { WebsocketService } from '../../../core/websocket/websocket.service';
import { textDiff } from './textDiff';
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

  content = '';
  serverRevision = 0;

  ngOnInit() {
    let roomDest = '';
    roomDest += 'journal:';
    roomDest += this.child.id + ':';
    roomDest += new Date().toISOString().split('T')[0];
    this.journalSocket.connect("ws://localhost:8080/ws", "roomDest");
  }

  ngOnChanges(changes: SimpleChanges): void {  
    if (changes['child'] && !changes['child'].firstChange) {
      this.journalService.getJournal(this.child.id).subscribe({
        next: (data) => {
          console.log(data);
          this.content = data.content;
          this.serverRevision = data.serverRevision;
        }
      });

      let roomDest = '';
      roomDest += 'journal:';
      roomDest += this.child.id + ':';
      roomDest += new Date().toISOString().split('T')[0];
      console.log(roomDest);
      // Reconnect when child changes (but not on first init)
      this.journalSocket.changeRoom(this.journalSocket.roomName)
      this.text.set('');
      this.prevText = '';
    }
  }

  ngOnDestroy() {
    this.journalSocket.disconnect();
  }

  onInput(event: Event) {
    const newValue = (event.target as HTMLTextAreaElement).value;
    this.prevText = this.text(); // capture before update
    console.log("previous text: " + this.prevText);
    console.log("new text: " + newValue);
    console.log(this.differ.getDiff(this.prevText, newValue));
    this.text.set(newValue);
  }
}
