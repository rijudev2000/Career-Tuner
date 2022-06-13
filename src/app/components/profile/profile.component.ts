import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private User: UserService,
    private Route: Router,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.email= this.userData._id;
  }
  @Input()
  userData!: UserData;

  logout() {
    this.User.Logout().subscribe((res) => {
      if (res.success == true) {
        this.Route.navigate(['']);
      }
    });
  }
  email:any;
}
