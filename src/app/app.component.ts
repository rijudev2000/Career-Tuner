import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  title = 'Career Tuner';
  toggle: boolean = true;
  onActivate() {
    let pos = scrollY;
    if (pos > 0) {
      window.scrollTo(0, 0);
    }
  }
}
