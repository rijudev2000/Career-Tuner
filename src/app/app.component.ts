import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AuthguardService } from './services/authguard.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(protected authGuard: AuthguardService) {}
  ngOnInit(): void {
    this.authGuard.Auth();
  }
  title = 'Career Tuner';
  toggle: boolean = true;
  onActivate() {
    let pos = scrollY;
    if (pos > 0) {
      window.scrollTo(0, 0);
    }
    this.authGuard.Auth();
  }
}
