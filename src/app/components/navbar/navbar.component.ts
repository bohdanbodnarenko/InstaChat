import { Component, OnInit } from "@angular/core";
import { LoginService } from "@services/login/login.service";
import { User } from "@models/User/User";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: User;
  isAuth: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.user = this.loginService.getReadyUser();
    if (this.loginService.getAccessToken()) {
      this.isAuth = true;
    }
  }

  logout() {
    this.loginService.logout();
    this.isAuth = false;
  }
}
