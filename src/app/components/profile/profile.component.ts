import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  AfterViewInit
} from "@angular/core";
import { LoginService } from "@services/login/login.service";
import { User } from "@models/User/User";
import { UserPipe } from "@models/User/UserPipe.pipe";
import { Post } from "@models/Posts/Post";
import { PostPipe } from "@models/Posts/PostPipe";
import { ModalService } from "@services/ModalService/modal.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private postPipe: PostPipe,
    private userPipe: UserPipe,
    private modalService: ModalService
  ) {}
  @Input()
  public isReady;
  public user: User = new User();
  public postsArray: Array<Post> = [];
  public selectedPost: Post = new Post();

  public onPostClick = (postID: number, id: string) => {
    this.loginService.setSelectedPost(postID);
    this.modalService.open(id);
    this.selectedPost = this.loginService.getSelectedPost();
  };

  public openModal(id: string): void {
    this.modalService.open(id);
  }

  public closeModal(id: string): void {
    this.modalService.close(id);
  }

  ngOnInit() {
    console.log("123" + this.loginService.getAccessToken());

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
