import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTabGroup, MatTab } from "@angular/material/tabs";
import { FormsModule } from '@angular/forms';
import { WebsocketService } from '../../../core/websocket/websocket.service';
import { textDiff } from './textDiff';

@Component({
  selector: 'main-live-journal',
  imports: [MatFormField, MatInput, MatTabGroup, MatTab, FormsModule],
  templateUrl: './main-live-journal.html',
  styleUrl: './main-live-journal.scss',
})
export class MainLiveJournal {
  private journalSocket = new WebsocketService;
  private differ = new textDiff();

  text = signal('');
  prevText = '';

  ngOnInit() {
    this.journalSocket.connect("ws://localhost:8080/ws", "journal");
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
    console.log("previous text: " + this.prevText);
    console.log("new text: " + newValue);
    console.log(this.differ.getDiff(this.prevText, newValue));
    this.text.set(newValue);
  }
}
