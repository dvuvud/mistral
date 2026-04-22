import { Component, OnDestroy, OnInit, signal, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTabGroup, MatTab } from "@angular/material/tabs";
import { FormsModule } from '@angular/forms';
import { WebsocketService } from '../../../core/websocket/websocket.service';
import { Child } from '../../../core/child/child.service';
import { textDiff } from './textDiff';

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

  text = signal('');
  prevText = '';

  ngOnInit() {
    this.initializeJournal();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['child'] && !changes['child'].firstChange) {
      // Reconnect when child changes (but not on first init)
      this.journalSocket.disconnect();
      this.text.set('');
      this.prevText = '';
      this.initializeJournal();
    }
  }

  private initializeJournal() {
    // Connect to child-specific journal room
    const journalRoom = this.child ? `journal-${this.child.id}` : "journal";
    this.journalSocket.connect("ws://localhost:8080/ws", journalRoom);
    this.journalSocket.getMessages().subscribe((message) => {
      // TODO
    });
  }

  ngOnDestroy() {
    this.journalSocket.disconnect();
  }

  onInput(event: Event) {
    const newValue = (event.target as HTMLTextAreaElement).value;
    this.prevText = this.text(); // capture before update
    console.log(this.differ.getDiff(this.prevText, newValue));
    this.text.set(newValue);
  }
}
