import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  protected readonly faCog = faCog;

  toggleTheme() {

    document.body.classList.toggle('dark-theme');
  }

}
