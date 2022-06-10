import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login, UserData } from '../../models/user.model';
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private User: UserService,
    private Route: Router,
    private el: ElementRef,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let myTag = this.el.nativeElement.querySelector('.container');
    this.activatedRoute.params.subscribe((param) => {
      if (param['path'] == 'register') {
        myTag.classList.add('right-panel-active');
      }
      if (param['path'] == 'signin') {
        myTag.classList.remove('right-panel-active');
      }
    });
    this.User.Auth().subscribe((res) => {
      if (res.success === true) {
        this.Route.navigate(['home/' + sessionStorage.getItem('name')]);
      }
    });
  }

  facebook = faFacebookF;
  google = faGoogle;
  linkedin = faLinkedinIn;
  loginModel: Login = new Login();
  signupModel: UserData = new UserData();
  toggle: boolean = false;
  toggle1: boolean = false;

  signin(form: NgForm) {
    this.toggle1 = true;
    this.loginModel._id = form.value.email;
    this.loginModel.password = form.value.password;
    this.User.Login(this.loginModel).subscribe({
      next: (res) => {
        if (res.success == true) {
          sessionStorage.setItem('email', res.user._id);
          sessionStorage.setItem(
            'name',
            (
              res.user.fname +
              '-' +
              res.user.mname +
              '-' +
              res.user.lname
            ).toLowerCase()
          );
          sessionStorage.setItem('role', res.user.role);
          setTimeout(() => {
            this.toggle1 = false;
            this.Route.navigate(['dashboard']);
          }, 3000);
        } else {
          console.log(res);
          this.toggle = true;
          this.toggle1 = false;
        }
      },
      error: () => {
        setTimeout(() => {
          this.toggle1 = false;
        }, 7000);
      },
    });
    form.reset();
  }

  signup(forms: NgForm) {
    let myTag = this.el.nativeElement.querySelector('#role');
    this.User.signupModel._id = forms.value.email;
    this.User.signupModel.phone = forms.value.phone;
    this.User.signupModel.password = forms.value.password;
    this.User.signupModel.role = myTag.value;



    this.Route.navigate(['user-details']);

    /* this.User.SignUp(this.signupModel).subscribe((res) => {
      if (res == 200) {
        console.log(res);
        this.Route.navigate(['']);
      } else {
        console.log(res);
      }
    }); */
    forms.reset();
  }

  remove(event: any) {
    if (event.target.id === 'signIn') {
      this.Route.navigate(['user/signin']);
    }
    if (event.target.id === 'signUp') {
      this.Route.navigate(['user/register']);
    }
  }
}
