import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircle, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.scss']
})
export class JoblistingComponent implements OnInit {

  constructor(private User: UserService, private Route: Router) {}


  ngOnInit(): void {
    this.User.Auth().subscribe((res) => {
      if (res.success == true) {
        this.toggle = true;
      }
    });
    this.User.getJobDetails().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        this.data.push(res[i]);
        if (i <= 5) {
          this.jobData.push(res[i]);
        }
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
    let data = {
      _id: sessionStorage.getItem('email'),
      jobs: i
    };
    this.User.update(data).subscribe((res)=>{
      console.log(res)
    },(err)=>{
      if(err){
        alert('Login to Apply')
        this.Route.navigate(['/user/signin'])
      }
    })
  }

}
