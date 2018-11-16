import { Component, OnInit } from '@angular/core';
import { LoginService } from '@services/login/login.service';
import { User } from '@models/User/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;
  isAuth = false;

  constructor(private loginService: LoginService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.loginService.getReadyUser();
    if (this.loginService.getAccessToken()) {
      this.isAuth = true;
    }
    this.checkIsAuth();
  }

  checkIsAuth(){
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment) {
        let tmpIndex: number = fragment.indexOf("=");
        this.loginService.setAccessToken(fragment.substr(tmpIndex + 1));
      }
    });
  }

  logout() {
    this.loginService.logout();
    this.isAuth = false;
  }
}
