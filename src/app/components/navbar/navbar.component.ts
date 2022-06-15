import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { AuthguardService } from 'src/app/services/authguard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  subscription: Subscription = new Subscription();
  fauser = faUser;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faBars = faBars;
  isLoggedIn: boolean = false;
  link: string = '';
  a: boolean = false;

  constructor(private User: UserService) {}

  ngOnInit() {
    this.subscription = this.User.isAuthenticated.subscribe((res) => {
      if (res === true) {
        this.link = '/dashboard';
        this.isLoggedIn = true;
      }
    });
  }

  @HostListener('window:scroll') onScroll(): void {
    this.getYPosition();
  }

  getYPosition() {
    let pos = scrollY;

    if (pos >= 40) {
      this.a = true;
    } else {
      this.a = false;
    }
  }
}
