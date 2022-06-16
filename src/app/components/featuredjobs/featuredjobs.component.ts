import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-featuredjobs',
  templateUrl: './featuredjobs.component.html',
  styleUrls: ['./featuredjobs.component.scss'],
})
export class FeaturedjobsComponent implements OnInit {
  subscription: Subscription = new Subscription();
  data: any = [];
  isLoggedIn: boolean = false;
  toggle1: boolean = true;
  jobData: any = [];
  counter: number = 11;

  constructor(private User: UserService, private Route: Router) {}

  ngOnInit(): void {
    this.subscription = this.User.isAuthenticated.subscribe((res) => {
      if (res === true) {
        this.isLoggedIn = true;
      }
    });

    this.User.getJobDetails().subscribe((res) => {
      for (let i = 0; i < res.job.length; i++) {
        if (i <= 2) {
          this.jobData.push(res.job[i]);
        }
      }
    });
  }
}
