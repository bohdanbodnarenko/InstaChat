import { Component, OnInit, Input } from "@angular/core";
import { LoginService } from "@services/login/login.service";
import { User } from "@models/User/User";
import { UserPipe } from "@models/User/UserPipe.pipe";
import { Post } from "@models/Posts/Post";
import { PostPipe } from "@models/Posts/PostPipe";
import { ModalService } from "@services/ModalService/modal.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private postPipe: PostPipe,
    private userPipe: UserPipe,
    private modalService: ModalService,

  ) {
    if (!this.loginService.getAccessToken()) {
      this.router.navigateByUrl('login')
    }
    
  }
  @Input()
  public isReady;
  public user: User = new User();
  public postsArray: Array<Post> = [];
  public selectedPost: Post = new Post();

  public onPostClick = (postID: number, id: string) => {
    this.loginService.setSelectedPost(postID);
    this.modalService.open(id);
    this.selectedPost = this.loginService.getSelectedPost();
  }

  public openModal(id: string): void {
    this.modalService.open(id);
  }

  public closeModal(id: string): void {
    this.modalService.close(id);
  }

  logOut() {
    this.loginService.logout();
  }

  ngOnInit() {

    this.loginService.getUserInfo().subscribe(
      response => {
        this.user = this.userPipe.transform(response);

        this.loginService.setReadyUser(this.user);
      },
      err => {
        console.log(err.message);
      }
    );

    this.loginService.getPosts().subscribe(
      response => {
        this.postPipe.transform(response, this.postsArray);
      },
      err => {
        console.log(err.message);
      }
    );

    this.loginService.setReadyPosts(this.postsArray);
  }
}
