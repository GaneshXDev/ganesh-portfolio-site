import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  screenWidth:any;
  sidebaropen:boolean = false;
  currentSection:string = 'section1';

  constructor() {
    this.getScreenWidth()
  }


  @HostListener("window:resize", ["$event"])
  getScreenWidth() {
    this.screenWidth = window.innerWidth
  }

  toggleSidebar(value: boolean) {
    this.sidebaropen = value
    console.log(this.sidebaropen)
  }

}
