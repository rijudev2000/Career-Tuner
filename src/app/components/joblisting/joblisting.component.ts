import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircle, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.scss'],
})
export class JoblistingComponent implements OnInit {
  constructor(private User: UserService, private Route: Router) {}

  ngOnInit(): void {
    /* this.User.Auth().subscribe((res) => {
      if (res.success == true) {
        this.toggle = true;
      }
    }); */
    this.User.getJobDetails().subscribe((res) => {
      console.log(res);
      if (res.job.length != 0) {
        for (let i = 0; i < res.job.length; i++) {
          this.data.push(res.job[i]);
          if (i <= 5) {
            this.jobData.push(res.job[i]);
            this.appliedby.push(this.jobData[i].appliedby);
          }
        }
        console.log(this.appliedby);
      }
    });
  }
  circle = faCircle;
  data: any = [];
  toggle: boolean = false;
  toggle1: boolean = true;
  jobData: any = [];
  like = faHeart;
  counter: number = 11;
  atom = faAtom;
  appliedby: any = [];
  user: any = [`${sessionStorage.getItem('email')}`];
  apply:string='Apply Now'

  browsemore() {
    this.jobData = [];
    for (let i = 0; i < this.data.length; i++) {
      if (i <= this.counter) {
        this.jobData.push(this.data[i]);
      }
    }
    this.counter += 6;
  }
  /* start() {
    let pos = scrollY;
    console.log(pos);
    if (pos >= 100) {
      this.a = true;
    }
  } */

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
  filter(e: any) {
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
  }
  clicked(i: any) {
  if(this.apply!='Applied'){
    this.apply='Applied'
    let data = {
      _id: sessionStorage.getItem('email'),
      jobs: i,
    };

    this.User.update(data).subscribe({
      next: (res) => {
        console.log(res);
        let a = {
          appliedby: `${sessionStorage.getItem('email')}`,
        };
        this.User.updateJob(a, i).subscribe((res) => {
          console.log(res);
        });
      },
      error: (err) => {
        if (err) {
          alert('Login to Apply');
          this.Route.navigate(['/user/signin']);
        }
      },
    });
  }
  }
}
