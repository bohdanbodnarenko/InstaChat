import { Injectable } from '@angular/core';
import { UserInfo } from '@models/User/UserInfo';
import { Observable } from 'rxjs';
import { PostsResponce } from '@models/Posts/PostsResponce';
import { Post } from '@models/Posts/Post';
import { User } from '@models/User/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(private http: HttpClient,private localSt: LocalStorageService,private router: Router) {
    }

    private posts: Post[];
    private selectedPost: Post;
    private homePageUrl: string = "http://localhost:4200";
    private pageToReditect: string = "http://localhost:4200/profile";

    public setReadyUser(user: User): void {
        // this.readyUser = user;    
        this.localSt.store("user",JSON.stringify(user));    
    }

    public  getReadyUser(): User {
        return JSON.parse(this.localSt.retrieve('user'));        
    }

    public logout(){
        this.localSt.clear();
        this.router.navigate([''])
    }

    public getSelectedPost(): Post {
        return this.selectedPost;
    }

    public setSelectedPost(value: number): void {
        this.selectedPost = this.posts[value];
    }

    public setReadyPosts(postArray: Post[]): void {
        this.posts = postArray;
    }

    public getReadyPosts(): Post[] {
        return this.posts;
    }

    public setAccessToken(token: string): void {
        this.localSt.store('AccessToken', token);
    }

    public getAccessToken(): string {
        return this.localSt.retrieve('AccessToken')
    }

    public getIdSelectedPost(): number {
        return this.posts.indexOf(this.selectedPost);
    }

    public getUserInfo(): Observable<UserInfo> {
        return this.http.get<UserInfo>('https://api.instagram.com/v1/users/self/?access_token=' + this.getAccessToken())
            .pipe(catchError(this.errorHandler));
    }

    public getPosts(): Observable<PostsResponce> {
        return this.http.get<PostsResponce>('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + this.getAccessToken())
            .pipe(catchError(this.errorHandler));;
    }

    public errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || 'Server error');
    }

    public getHomePageUrl(): string {
        return this.homePageUrl;
    }
    public getPageToReditect(): string {
        return this.pageToReditect;
    }
}



