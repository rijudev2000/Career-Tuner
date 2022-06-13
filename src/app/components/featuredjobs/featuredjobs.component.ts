import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-featuredjobs',
  templateUrl: './featuredjobs.component.html',
  styleUrls: ['./featuredjobs.component.scss'],
})
export class FeaturedjobsComponent implements OnInit {
  constructor(private User: UserService, private Route: Router) {}

  ngOnInit(): void {
    /* this.User.Auth().subscribe((res) => {
      if (res.success == true) {
        this.toggle = true;
      }
    }); */
    this.User.getJobDetails().subscribe((res) => {
      for (let i = 0; i < res.job.length; i++) {
        if (i <= 2) {
          this.jobData.push(res.job[i]);
        }
      }
    });
  }

  data: any = [];
  toggle: boolean = false;
  toggle1: boolean = true;
  jobData: any = [];
  counter: number = 11;
}
