import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "@services/login/login.service";

@Component({
  selector: "app-chatroom",
  templateUrl: "./chatroom.component.html",
  styleUrls: ["./chatroom.component.css"]
})
export class ChatroomComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
    if (!this.loginService.getAccessToken()) {
      this.router.navigateByUrl("login");
    }
  }

  ngOnInit() {}
}
