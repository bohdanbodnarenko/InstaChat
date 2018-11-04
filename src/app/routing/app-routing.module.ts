import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "@components/profile/profile.component";
import { ChatroomComponent } from "@components/chatroom/chatroom.component";
import { LoginComponent } from "@components/login/login.component";

export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent  },
  { path: "chat", component: ChatroomComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
