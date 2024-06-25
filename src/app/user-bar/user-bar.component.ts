import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, Event, RouterLink, RouterLinkActive} from '@angular/router';
import { NgClass, NgIf } from "@angular/common";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  standalone: true,
  imports: [
    NgIf,
    FaIconComponent,
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./user-bar.component.css']
})
export class UserBarComponent implements OnInit {
  isLoggedIn: boolean = true;
  currentPage: string = 'Home';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateCurrentPage(event.urlAfterRedirects);
    });
  }

  updateCurrentPage(url: string) {
    if (url.includes('/jouer')) {
      this.currentPage = 'Jouer';
    } else if (url.includes('/ecrire')) {
      this.currentPage = 'Ecrire';
    } else if (url.includes('/profil')) {
      this.currentPage = 'Profil';
    } else {
      this.currentPage = 'Home';
    }
  }

  logout() {
    console.log('User logged out');
    this.isLoggedIn = false;
  }

  protected readonly faBars = faBars;
}
