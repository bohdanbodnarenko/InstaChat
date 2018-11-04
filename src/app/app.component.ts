import { Component, OnInit } from '@angular/core';
import { LoginService } from '@services/login/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private loginService: LoginService,) {
    }

    public isAuth: boolean;


    private loginUrl: string = 'https://www.instagram.com/oauth/authorize/?client_id=389654896f884ec8bf642313b72d4943&redirect_uri=http://localhost:4200/profile&response_type=token';


    onClick(): void {
        window.location.href = this.loginUrl;
    }

    ngOnInit() {

        if (window.location.href.length > this.loginService.getHomePageUrl().length + 1) {
            if(!this.loginService.getAccessToken()){
            this.isAuth = false;
            let tmpUrl: string = window.location.href;
            let tmpIndex: number = tmpUrl.indexOf('=');
            this.loginService.setAccessToken(tmpUrl.substr(tmpIndex + 1));
            }
        } else {
            this.isAuth = true;
        }

    }

}
