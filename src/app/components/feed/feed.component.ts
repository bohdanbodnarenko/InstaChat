import {
  Component,
  OnInit,
  OnChanges,
  ViewChild,
  ElementRef
} from "@angular/core";
import { ChatMessage } from "@models/chat-message.model";
import { ChatService } from "@services/chat/chat.service";
import { LoginService } from "@services/login/login.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"]
})
export class FeedComponent implements OnInit {
  feed: ChatMessage[];
  @ViewChild("feedDiv") myScrollContainer: ElementRef;

  constructor(private chat: ChatService, private loginService: LoginService) {}

  ngOnInit() {
    this.getMessages();
  }
  delete(message: ChatMessage) {
    this.chat.deleteMessage(message);
    return false;
  }
  private getMessages(){
    this.chat
      .getMessages()
      .snapshotChanges()
      .subscribe(responce => {
        this.feed = [];
        responce.forEach(elem => {
          let message: ChatMessage;
          message = elem.payload.toJSON();
          message.key = elem.key;
          this.feed.push(message);
        });
      });
  }
}
