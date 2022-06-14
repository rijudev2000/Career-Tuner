import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { AuthguardService } from 'src/app/services/authguard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private User: UserService,
    private Route: Router,
    private el: ElementRef,
    private auth: AuthguardService
  ) {}

  ngOnInit() {
    /* if (this.auth.isAuthenticated==true) {
      this.link = '/dashboard';
      this.user = true;
    } */
    /* if(sessionStorage.getItem('email')){
      this.link = true;
      this.user = true;
    }else{
      this.link = false
    } */
    this.User.Auth().subscribe((res) => {
      if (res.success == true) {
        this.link = true;
        this.user = true;
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

  fauser = faUser;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faBars = faBars;
  user: boolean = false;
  link: any;
  a: boolean = false;
  /* start() {
    let pos = scrollY;
    console.log(pos);
    if (pos >= 100) {
      this.a = true;
    }
  } */
}
