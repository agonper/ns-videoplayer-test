import { Component, OnInit } from "@angular/core";

import { setCurrentOrientation } from "nativescript-screen-orientation";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    constructor() {
        setCurrentOrientation("portrait", () => {
           console.log("Orientation changed to portrait");
        });
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
