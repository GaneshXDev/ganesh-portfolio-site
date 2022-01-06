import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "../Component/MainPanel/home/home.component";
import { SidepanelComponent } from "../Component/SidePanel/sidepanel.component"; 
import { AboutComponent } from "../Component/MainPanel/About/about.component";
import { ExperirenceComponent } from "../Component/MainPanel/Experience/experience.component";
import { SkillComponent } from "../Component/MainPanel/Skill/skill.component";
import { ContactComponent } from "../Component/MainPanel/Contact/contact.component"; 
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperirenceComponent,
    SkillComponent,
    ContactComponent,
    SidepanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
