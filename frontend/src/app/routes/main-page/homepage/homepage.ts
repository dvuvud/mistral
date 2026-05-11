import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'homepage',
  imports: [MatCard, MatCardHeader, MatCardContent, MatDivider, MatIcon],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  fakeNews = "Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life," + 
             "and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile," +
             "sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. "
  fakeNewsLong = "Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life," + 
                 "and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile," +
                 "sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. " +
                 "Finally, one I can answer! I literally have never been able to answer any askreddit question in my entire life," + 
                 "and have never posted anything on reddit until this exact moment that is happening right now. Writing this on mobile," +
                 "sorry for bad formatting, also english is my 6th language so there might be one wrong word, TLDR at the bottom. "
} 
