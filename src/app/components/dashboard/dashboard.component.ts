import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private User:UserService, private Route: Router, private el: ElementRef) {}

  ngOnInit(): void {
    
  }
  logout(){
    this.User.Logout().subscribe()
    this.Route.navigate([''])
  }

}
