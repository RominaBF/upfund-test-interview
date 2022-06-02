import { Component } from '@angular/core';
import { AnnonceListComponent } from './annonce/annonce-list.component';
import {AnnonceService} from "./annonce/annonce.service";

@Component({
  selector: 'app-root',
  template: `<nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
</nav>
<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'seLoger';


}
