import { Component, OnInit } from "@angular/core";
import { LoginService } from "@services/login/login.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment) {
        let tmpIndex: number = fragment.indexOf("=");
        this.loginService.setAccessToken(fragment.substr(tmpIndex + 1));
      }
    });
  }

  public isAuth: boolean;

  ngOnInit() {}
}
