import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ChatMessage } from '@models/chat-message.model';
import { ChatService } from '@services/chat/chat.service';
import { LoginService } from '@services/login/login.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  private feed: ChatMessage[];
  @ViewChild ('feedDiv') myScrollContainer:ElementRef;

  constructor(private chat: ChatService,private loginService: LoginService) { }

  ngOnInit() {
    this.chat.getMessages().snapshotChanges().subscribe(responce=>{
      this.feed = [];
      responce.forEach(elem =>{
        let message:ChatMessage;
        message = elem.payload.toJSON();
        message.key = elem.key;
        this.feed.push(message);
      })
    });
    
    // console.log(this.myScrollContainer.nativeElement.scrollTop);
    // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    
  }
  delete(message:ChatMessage){
    if (message.userName===this.loginService.getReadyUser().userName) {
      let isConfirm = confirm("Are you sure to delete: "+message.message);
      console.log(isConfirm);
      
      this.chat.deleteMessage(message);
    }

    
  }
  ngOnChanges() {
    this.chat.getMessages().snapshotChanges().subscribe(responce=>{
      responce.forEach(elem =>{
        let message:ChatMessage;
        message = elem.payload.toJSON();
        message.key = elem.key;
        this.feed.push(message)
      })
    });
  }

}