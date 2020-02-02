import * as core from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { VideoStreamComponent } from './video-stream/video-stream.component';

const routes: Routes = [
  {path: '', component: NewChatComponent},
  {path:'video', component: VideoStreamComponent},
  {path: 'chatroom/:id', component: ChatroomComponent},
  {path: '**', component:  PageNotFoundComponent}
];

@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
