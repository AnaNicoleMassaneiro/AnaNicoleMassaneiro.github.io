import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SocialMediaComponent } from "./social-media/social-media.component";
import { AppRoutingModule } from "./app-routing.module";
import { SkillsComponent } from "./skills/skills.component";
import { SoftwareSkillComponent } from "./skills/software-skill/software-skill.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { EducationComponent } from "./education/education.component";
import { SkillProgressComponent } from "./skill-progress/skill-progress.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SocialMediaComponent,
    SkillsComponent,
    SoftwareSkillComponent,
    ContactComponent,
    HeaderComponent,
    EducationComponent,
    SkillProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
