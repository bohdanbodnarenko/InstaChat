import { Component, OnInit, Input } from "@angular/core";
import { ChatMessage } from "@models/chat-message.model";
import { LoginService } from "@services/login/login.service";
import { User } from "@models/User/User";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  @Input()chatMessage: ChatMessage;
  userName: string;
  messageContent: string;
  timeStamp: string;
  isOwnMessage: boolean;
  ownUserName: string;
  user: User;

  constructor(private loginService: LoginService) {
    this.user = loginService.getReadyUser();
    // this.isOwnMessage = this.user.userName === this.chatMessage.userName;
  }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userName = chatMessage.userName;
    this.isOwnMessage = this.user.userName === this.chatMessage.userName;
  }
}
