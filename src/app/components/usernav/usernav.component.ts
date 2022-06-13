import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { UserData } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.scss'],
})
export class UsernavComponent implements OnInit {
  constructor(
    private User: UserService,
    private Route: Router,
    private el: ElementRef
  ) {}
  @Input()
  userdetails!: UserData;

  ngOnInit(): void {
    /* this.User.Auth().subscribe((res) => {
      if (res.success === true) {
        this.user = false;
        this.link = '/home/' + sessionStorage.getItem('name');
      }
    }); */
  }

  user: boolean = true;
  link: string = '';
  a: boolean = false;
  fauser = faUser;
  faBars = faBars;

  click() {
    this.User.Logout().subscribe((res) => {
      if (res.success == true) {
        sessionStorage.clear();
        this.Route.navigate(['']);
      }
    });
  }
}
