import { Component } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent { 
  scrollTo(section:string) {
    document.getElementById(section)!.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
}
