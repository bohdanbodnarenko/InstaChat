import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PostPipe } from "@models/Posts/PostPipe";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./routing/app-routing.module";
import { ProfileComponent } from "@components/profile/profile.component";
import { HttpClientModule } from "@angular/common/http";
import { UserPipe } from "@models/User/UserPipe.pipe";
import { ModalService } from "@services/ModalService/modal.service";
import { FormsModule } from "@angular/forms";
import { ModalComponent } from "./components/modal/modal.component";
import { Ng2Webstorage } from "ngx-webstorage";
import { ChatroomComponent } from "./components/chatroom/chatroom.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routing/app-routing.module";
import { ChatService } from "@services/chat/chat.service";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from "environments/environment";
import { ChatFormComponent } from "@components/chat-form/chat-form.component";
import { FeedComponent } from "@components/feed/feed.component";
import { NavbarComponent } from "@components/navbar/navbar.component";
import { MessageComponent } from '@components/message/message.component';
import { NgxAutoScrollModule } from "ngx-auto-scroll";
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PostPipe,
    UserPipe,
    ModalComponent,
    ChatroomComponent,
    ChatFormComponent,
    FeedComponent,
    NavbarComponent,
    MessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2Webstorage,
    RouterModule.forRoot(appRoutes),
    AngularFireModule,
    NgxAutoScrollModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [PostPipe, UserPipe, ModalService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
