import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/models/user.model';
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
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    /* if (sessionStorage.getItem('email')) {
      this.togglespinner = false;
      this.name = sessionStorage.getItem('name');
      this.name = this.name.split('-')[0].toUpperCase() + ' ';
    } */
    this.User.getUserDetails(sessionStorage.getItem('email')).subscribe(
      (res) => {
        console.log(res.user);
        if (res.success == true) {
          this.userData = res.user;
          
          if (res.user.role == 'Applicant' && res.user.jobs.length != 0) {
            for (let i = 0; i < res.user.jobs.length; i++) {
              this.User.getJobSingleDetail(res.user.jobs[i]).subscribe(
                (data) => {
                  console.log(data)
                  this.jobDataApplied.push(data);
                  
                }
              );
              if(i==res.user.jobs.length-1){
                this.togglespinner = false;
              }
            }
            
          }else{
            this.togglespinner = false;
          }
        }else{
          this.Route.navigate([''])
        }
      }
    );
    
  }
  togglespinner: boolean = false;
  userData: UserData = new UserData();
  name: any;
  jobDataApplied: any = [];
  activeStatus: String = 'dashboard'; 
  logout() {
    this.User.Logout().subscribe((res) => {
      if (res.success == true) {
        this.Route.navigate(['']);
      }
    });
  }

  active(e:any){
    if(e=='dashboard'){
      this.activeStatus = 'dashboard'
    }
    if(e=='profile'){
      this.activeStatus = 'profile'
    }
    if(e=='job'){
      this.activeStatus = 'job'
    }
  }
}
