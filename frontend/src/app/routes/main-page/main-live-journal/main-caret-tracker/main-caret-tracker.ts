import { Component, effect, ElementRef, input, OnInit, signal, viewChild, inject, WritableSignal, viewChildren } from '@angular/core';
import { User } from '../../../../core/user/user.service';
import { WebsocketService, WsJournalResponse, WsMailbox, WsMessageContent, WsPresenceChangeMessage } from '../../../../core/websocket/websocket.service';
import { Presence } from '../../../../core/presence/presence.service';

const DEBUG = false;

interface UserCaretContext {
  usr: User,
  rect: {
    x: number,
    y: number,
    width: number,
    height: number
  },
  preSpan: WritableSignal<string>,
  postSpan: WritableSignal<string>
}

@Component({
  selector: 'main-caret-tracker',
  imports: [],
  templateUrl: './main-caret-tracker.html',
  styleUrl: './main-caret-tracker.scss',
})
export class MainCaretTracker implements OnInit {
  private socketService = inject(WebsocketService);
  presenceService = inject(Presence);
  private hiddenContainer = viewChild.required<ElementRef<HTMLDivElement>>("hiddenContainer");
  private hidden = viewChildren<ElementRef<HTMLDivElement>>("hiddenDivs");
  private canvasElement = viewChild.required<ElementRef<HTMLCanvasElement>>("canvas");
  journalScrollTop = input.required<number>();
  presentTeachers = signal<Map<number, UserCaretContext>>(new Map<number, UserCaretContext>());
  private em = 12;

  isGroup = input<string>("");
  filter = input.required<number>();

  constructor() {
    effect(() => {
      this.journalScrollTop();
      if(this.hiddenContainer())
        this.hiddenContainer().nativeElement.scrollTop = this.journalScrollTop();
    });
    effect(() => {
      this.presenceService.connectedTeachers();
      this.initTeachers();
    });
  }

  ngOnInit() {
    this.socketService.getMessages(WsMailbox.journal).subscribe((next: WsMessageContent) => {
      this.handleIncomingChange(next as WsJournalResponse);
    })
    this.socketService.getMessages(WsMailbox.presence).subscribe((next) => {
      const nextAs = next as WsPresenceChangeMessage;
      if (nextAs.type == "PRESENCE_JOIN" || nextAs.type == "PRESENCE_STATE") {
        this.initTeachers();
      }
      else if (next.type == "PRESENCE_LEAVE") {
        this.presentTeachers.update((current) => {
          current.delete(nextAs.userId);
          return current;
        });
      }
    });
    this.initTeachers();

    setInterval(() => { this.refitCarets() }, 1000);
  }

  initTeachers() {
    if (DEBUG) console.log("InitTeachers called");
    const allTeachers = this.presenceService.connectedTeachers();
    if (DEBUG) console.log(this.presenceService.connectedTeachers());
    const prev = this.presentTeachers();
    allTeachers.forEach((user: User) => {
      if (prev.get(user.userId) !== undefined) {
        // Teacher already accounted for locally
        if (!this.isInRoom(user)) {
          prev.delete(user.userId) // Stale reference
        }
        return;
      }
      prev.set(user.userId, this.createCaretContext(user));
    });

    this.presentTeachers.set(prev);
    if (DEBUG) console.log(this.presenceService.connectedTeachers());
    if (DEBUG) console.log(this.presentTeachers());
  }

  isInRoom(usr: User) {
    const parts = usr.room.split(":");
    const type = parts[1];
    const id = parseInt(parts[2]);
    const typeMatch = (this.isGroup() !== "" && type === "group") || (this.isGroup() === "" && type === "child");
    const num = this.filter();
    return typeMatch && id == num;
  }

  createCaretContext(usr: User) {
    return { usr: usr, rect: { x: 0, y: 0, width: 0, height: 0 }, preSpan: signal<string>(""), postSpan: signal<string>("") };
  }

  handleIncomingChange(msg: WsJournalResponse) {
    if (DEBUG) console.log(msg.userId);
  }

  drawCarets() {
    // Get the canvas element
    const canvasElement = this.canvasElement().nativeElement;
    // Ensure the dimensions match the CSS pixels the canvas is occupying
    canvasElement.width = canvasElement.getBoundingClientRect().width;
    canvasElement.height = canvasElement.getBoundingClientRect().height;
    // Get the canvas context
    const canvasContext = canvasElement.getContext("2d");
    if (canvasContext === null) {
      console.error("Draw: Could not get canvasElement context");
      return;
    }
    canvasContext.reset();
    if (DEBUG) console.log("From draw", this.presentTeachers());
    const emScaleMod = 0.8;
    const hPadding = 5;
    const vPadding = 5;
    canvasContext.font = this.em * emScaleMod + "px Roboto";
    for (const element of this.presentTeachers()) {
      const user = element[1];
      const txt = user.usr.name;
      const nameMetrics = canvasContext!.measureText(txt);
      canvasContext.fillStyle = user.usr.color;
      let adjustedX = user.rect.x;
      let adjustedRectY, adjustedTextY;
      if (user.rect.y - this.em < 0) {
        adjustedRectY = user.rect.y + this.em;
        adjustedTextY = user.rect.y + this.em * 1.8;
      }
      else {
        adjustedRectY = user.rect.y - this.em;
        adjustedTextY = user.rect.y - vPadding;
      }

      if (user.rect.x - hPadding < 0) {
        adjustedX = user.rect.x + (user.rect.x - hPadding * -1);
      }

      if (user.rect.x + nameMetrics.width + hPadding * 2 > canvasContext.canvas.width) {
        adjustedX = canvasContext.canvas.width - nameMetrics.width - hPadding * 2;
      }
      canvasContext.fillRect(adjustedX - hPadding, adjustedRectY, nameMetrics.width + hPadding * 2, this.em);
      canvasContext.fillStyle = "white";
      canvasContext.fillText(txt, adjustedX, adjustedTextY);
      //canvasContext.strokeStyle = "black";
      //canvasContext.strokeText(txt, user.rect.x, user.rect.y - nameMetrics.emHeightAscent);
    }
  }

  updateCaret(userId: number, wholeText: string, pos: number) {
    // Cut the full text in half where the caret is at
    const firstPart = wholeText.substring(0, pos)
    const secondPart = wholeText.substring(pos);
    const ctx = this.presentTeachers().get(userId);
    if (ctx === undefined) {
      console.error("Couldn't find caret context for that user id (" + userId + "), Local: [" + this.presentTeachers() + "] | Global:");
      if (DEBUG) console.log(this.presenceService.connectedTeachers());
      return;
    }
    // Set the content of the mirrordiv
    ctx.preSpan.set(firstPart);
    ctx.postSpan.set(secondPart);
    // Clear the buffer and draw
    this.refitCaret(userId);
    this.drawCarets();
  }

  updateCanvasEm(textArea: HTMLTextAreaElement) {
    // Translate 1 CSS em to canvas pixels
    this.em = parseFloat(getComputedStyle(textArea).fontSize);
  }

  updateCarets(wholeText: string, textArea: HTMLTextAreaElement) {
    for (const element of this.presentTeachers()) {
      this.updateCaret(element[0], wholeText, textArea.selectionStart);
    }
    this.drawCarets();
  }

  refitCaret(userId: number) {
    const ctx = this.presentTeachers().get(userId);
    if (ctx === undefined) {
      console.error("Refit: Couldn't find UserCaretContext for that caret id");
      return;
    }
    const spanElementRef = this.hidden().find((element) => parseInt(element.nativeElement.id.split("-")[1]) == userId);
    if (!spanElementRef) {
      console.error("Refit: Couldn't find nativeElement for that caret id")
      return;
    }
    const spanElement: HTMLSpanElement | null = spanElementRef.nativeElement.firstElementChild as HTMLSpanElement;
    ctx.rect = { x: spanElement.offsetLeft, y: spanElement.offsetTop - this.journalScrollTop(), width: 3, height: this.em }
    if (DEBUG) console.log("From refit: ", spanElement, ctx.rect);
    this.presentTeachers.update((current) => {
      current.set(userId, ctx);
      return current;
    });
  }

  refitCarets() {
    for (const userCaret of this.presentTeachers()) {
      this.refitCaret(userCaret[0]);
    }
    this.drawCarets();
  }

  clearAndReset() {
    this.canvasElement().nativeElement.getContext("2d")!.reset();
    this.presentTeachers.set(new Map<number, UserCaretContext>());
    this.drawCarets();
  }

  /*
  findRelativeOrigin() {
    const element: HTMLDivElement = this.hidden().nativeElement;
    return {
      x: element.getBoundingClientRect().x,
      y: element.getBoundingClientRect().y + parseInt(window.getComputedStyle(element)['paddingTop'].replace("px", "")),
    }
  }
  */

}
