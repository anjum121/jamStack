import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
 
 
import { Component } from "@angular/core";

 

import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "my-netlify-angular";
  faCoffee = faCoffee;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
}
