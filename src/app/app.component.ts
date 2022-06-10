import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Career Tuner';
  onActivate() {
    let pos = scrollY;
    if (pos > 0) {
      window.scrollTo(0, 0);
    }
  }
}
