import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
