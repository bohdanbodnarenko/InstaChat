import { Injectable } from "@angular/core";
import { LoginService } from "@services/login/login.service";
import { User } from "@models/User/User";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { ChatMessage } from "@models/chat-message.model";
import { log } from "util";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private user: User;
  private chatMessages: AngularFireList<ChatMessage>;
  private userList: AngularFireList<User>;

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

  addUser(user:User){
    this.getUserList().snapshotChanges().subscribe(responce =>{
      responce.forEach(elem=>{
        if (user.key!==elem.key) {
          this.userList.push(user)
        }
      })
    })
  }

  getUserList(): AngularFireList<User> {
    this.db.list("users", ref => ref.limitToLast(25).orderByKey()).snapshotChanges().subscribe(ref=>{console.log(ref)});
    // this.addUser(this.user);
    // this.db.list("users", ref => ref.limitToLast(25).orderByKey()).snapshotChanges().subscribe(ref=>{console.log(ref)});
    
    return this.db.list("users", ref => ref.limitToLast(25).orderByKey());
    
  }
  getMessages(): AngularFireList<ChatMessage> {
    return this.db.list("messages", ref => ref.limitToLast(25).orderByKey());
  }

  getTimeStamp() {
    const now = new Date();
    const date =
      now.getUTCFullYear() +
      "/" +
      (now.getUTCMonth() + 1) +
      "/" +
      now.getUTCDate();
    const time =
      now.getUTCHours() + ":" + now.getUTCMinutes() + ":" + now.getUTCSeconds();

    return date + " " + time;
  }
}
