import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { VideoStreamComponent } from './video-stream/video-stream.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent, PageNotFoundComponent, NewChatComponent, VideoStreamComponent, ChatBoxComponent, ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
