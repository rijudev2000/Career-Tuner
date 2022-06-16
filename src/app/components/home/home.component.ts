import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { faAtom, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private User: UserService,
    private Route: Router
  ) {}

  ngOnInit(): void {
    this.User.Auth().subscribe((res) => {
      if (res.success == true) {
        this.User.isAuthenticated.next(true);
        this.toggle = true;
        this.togglespinner = false;
      }
      else{
        this.togglespinner = false;
      }
    });
  }
  circle = faCircle;
  toggle: boolean = false;
  toggle1: boolean = true;
  like = faHeart;
  counter: number = 11;
  atom = faAtom;
  togglespinner: boolean = true;

  onSubmit(e: any) {
    console.log(e.target.location.value);
    if (
      e.target.keyword.value != '' &&
      e.target.category.value == 'Select Category' &&
      e.target.location.value == 'Location'
    ) {
      this.Route.navigate(['/results/' + e.target.keyword.value]);
    }
    if (
      e.target.keyword.value != '' &&
      e.target.category.value != 'Select Category' &&
      e.target.location.value == 'Location'
    ) {
      this.Route.navigate([
        '/results/' + e.target.keyword.value + '/' + e.target.category.value,
      ]);
    }
    if (
      e.target.keyword.value != '' &&
      e.target.category.value != 'Select Category' &&
      e.target.location.value != 'Location'
    ) {
      this.Route.navigate([
        '/results/' +
          e.target.keyword.value +
          '/' +
          e.target.category.value +
          '/' +
          e.target.location.value,
      ]);
    }
  }
  /*   filter(e: any) {
    this.jobData = [];
    let i, j;
    for (i = 0, j = 0; i < this.data.length; i++) {
      if (e == 'FullTime') {
        if (this.data[i].jobtype == 'Full Time') {
          this.jobData[j++] = this.data[i];
          console.log(this.jobData);
        }
      }
      if (e == 'PartTime') {
        if (this.data[i].jobtype == 'Part Time') {
          this.jobData[j++] = this.data[i];
        }
      }
      if (e == 'Featured') {
        this.jobData[j++] = this.data[i];
      }
      if (i >= 8) {
        return;
      }
    }
    if (j == 0) {
      this.toggle1 = false;
      let datas = {
        jobTitle: 'No Job Found',
      };
      this.jobData.push(datas);
    }
  } */
}
