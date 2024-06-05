import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FaIconComponent, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  standalone: true,
  imports: [
    NgIf,
    FaIconComponent,
    NgClass
  ],
  styleUrls: ['./user-bar.component.css']
})
export class UserBarComponent {
  userName: string = 'John Doe';
  isLoggedIn: boolean = true;
  panelOpen: boolean = false;

  logout() {
    // Implement logout logic here
    console.log('User logged out');
    this.isLoggedIn = false;
  }

  togglePanel() {
    this.panelOpen = !this.panelOpen;
  }

  protected readonly faBars = faBars;
}
