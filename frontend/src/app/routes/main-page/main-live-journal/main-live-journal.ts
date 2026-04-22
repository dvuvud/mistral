import { Component, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTabGroup, MatTab } from "@angular/material/tabs";
import { WebsocketService, WsMessageType } from '../../../core/websocket/websocket.service';

@Component({
  selector: 'main-live-journal',
  imports: [MatFormField, MatInput, MatTabGroup, MatTab],
  templateUrl: './main-live-journal.html',
  styleUrl: './main-live-journal.scss',
})
export class MainLiveJournal {
  private journalSocket = new WebsocketService;
  
  ngOnInit() {
    this.journalSocket.connect("ws://localhost:8080/ws", "journal");
    this.journalSocket.getMessages().subscribe((message) => {
      // TODO
    });
  }

  ngOnDestroy() {
    this.journalSocket.disconnect();
  }
}
