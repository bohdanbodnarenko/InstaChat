import { Component, OnInit } from '@angular/core';
import { ChatService } from '@services/chat/chat.service';
import { LoginService } from '@services/login/login.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private chat:ChatService, private loginService:LoginService) { }

  ngOnInit() {
    this.chat.addUser(this.loginService.getReadyUser());
    console.log(this.chat.getUserList());
    
  }

}
