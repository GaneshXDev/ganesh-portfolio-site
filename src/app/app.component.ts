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
  gototop:any;

  constructor() {
    this.getScreenWidth()
  }

  // ngOnInit() {
  //   window.addEventListener('scroll', this.getScrollHeight, true);
  // }

  // ngOnDestroy() {
  //   window.removeEventListener('scroll', this.getScrollHeight, true);
  // }

  @HostListener("window:resize", ["$event"])
  getScreenWidth() {
    this.screenWidth = window.innerWidth
  }

  toggleSidebar(value: boolean) {
    this.sidebaropen = value
    console.log(this.sidebaropen)
  }

  handleScrollToTop() {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
  }

  // getScrollHeight(e: Event) {
  //   let mainwrapper = e.target as HTMLElement;
    
  //   this.gototop = mainwrapper.scrollTop;
  //   console.log(this.gototop)
  // }

}
