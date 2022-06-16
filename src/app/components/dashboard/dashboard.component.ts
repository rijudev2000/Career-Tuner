import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/models/user.model';
import { AuthguardService } from 'src/app/services/authguard.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private User: UserService,
    private Route: Router,
    private el: ElementRef,
    private auth: AuthguardService
  ) {}

  ngOnInit(): void {
    this.User.getUserDetails(localStorage.getItem('email')).subscribe(
      (res) => {
        if (res.success == true) {
          this.userData = res.user;
          console.log(res.user);
          this.role = res.user.role;
          if (res.user.role == 'Applicant' && res.user.jobs.length != 0) {
            for (let i = 0; i < res.user.jobs.length; i++) {
              this.User.getJobSingleDetail(res.user.jobs[i]).subscribe(
                (data) => {
                  /* console.log(data); */
                  this.jobDataApplied.push(data);
                }
              );
              if (i == res.user.jobs.length - 1) {
                this.togglespinner = false;
              }
            }
          } else {
            this.togglespinner = false;
          }
        }
      }
    );
  }
  togglespinner: boolean = true;
  userData: UserData = new UserData();
  name: any;
  role: any;
  jobDataApplied: any = [];
  activeStatus: String = 'dashboard';
  logout() {
    this.User.Logout().subscribe((res) => {
      if (res.success == true) {
        this.User.isAuthenticated.next(false);
        this.Route.navigate(['']);
      }
    });
  }

  active(e: any) {
    this.activeStatus = e;
    if (e == 'jobapplied') {
      this.jobDataApplied = [];
      for (let i = 0; i < this.userData.jobs.length; i++) {
        this.User.getJobSingleDetail(this.userData.jobs[i]).subscribe(
          (data) => {
            this.jobDataApplied.push(data);
          }
        );
      }
    }
  }
}
