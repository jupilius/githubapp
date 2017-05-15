import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProfileComponent} from "./profile/profile.component";
import {GithubService} from "./services/github.service";
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  providers: [
    GithubService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
