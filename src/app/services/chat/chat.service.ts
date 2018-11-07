import { Injectable } from "@angular/core";
import { LoginService } from "@services/login/login.service";
import { User } from "@models/User/User";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { ChatMessage } from "@models/chat-message.model";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private user: User;
  private chatMessages: AngularFireList<ChatMessage>;

  constructor(
    private loginService: LoginService,
    private db: AngularFireDatabase
  ) {
    this.user = this.loginService.getReadyUser();
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const userName = this.user.userName;
    const img = this.user.imgSrc;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: userName,
      img: img
    });
  }

  getMessages(): AngularFireList<ChatMessage> {
    return this.db.list("messages", ref => ref.limitToLast(25).orderByKey());
  }

  getTimeStamp() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    return hours + ":" + minutes;
  }
  deleteMessage(message: ChatMessage) {
    if (message.userName === this.loginService.getReadyUser().userName) {
      if (confirm("Are you sure to delete: " + message.message)) {
        this.db.object("/messages/" + message.key).remove();
      }
    }
  }
}
