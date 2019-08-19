import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App2Component } from './app.component';
import { TestService } from '@proj2-app/core-services/test.service';

@NgModule({
  declarations: [
    App2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [TestService],
  bootstrap: [App2Component]
})
export class AppModule { }
