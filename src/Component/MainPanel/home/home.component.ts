import { Component } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent {
    constructor() {
        this.makeParallexEffect()
        
    }

    redirectPages(value: string) {
        if (value === "instagram") {
            window.open("https://www.instagram.com/__masked._.shadow__/", "_blank")
        } else if (value === "facebook") {
            window.open("https://www.facebook.com/vrsirs.vrsirs/", "_blank")
        } else if (value === "github") {
            window.open("https://github.com/GaneshXDev", "_blank")
        } else if (value === "linkedin") {
            window.open("https://www.linkedin.com/in/ganesh-kumar-991706224/", "_blank")
        }
    }

    makeParallexEffect() {
        document.addEventListener("mousemove", (e) => {
            let layers = Array.from(document.getElementsByClassName("parallex-img") as HTMLCollectionOf<HTMLElement>);
            layers.forEach(layer => {
                const speed = (layer.getAttribute("data-speed"));
                const intspeed:number = Number(speed);
                const x = (window.innerWidth -  e.pageX * intspeed)/100;
                const y = (window.innerHeight - e.pageY * intspeed)/100;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        })
    }
    
}