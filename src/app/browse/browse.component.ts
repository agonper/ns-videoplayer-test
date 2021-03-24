import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from "nativescript-videoplayer";
import { setCurrentOrientation } from "nativescript-screen-orientation";
import { Page } from "tns-core-modules/ui/page";

// Register video player component
registerElement("VideoPlayer", () => Video);

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    constructor(page: Page) {
        page.on("navigatingTo", () => {
            setCurrentOrientation("landscape", () => {
                console.log("Orientation changed to landscape");
            });
        });
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
