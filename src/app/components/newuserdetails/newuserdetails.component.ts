import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as skills from '../../models/skills.json';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-newuserdetails',
  templateUrl: './newuserdetails.component.html',
  styleUrls: ['./newuserdetails.component.scss'],
})
export class NewuserdetailsComponent implements OnInit {
  subscription: Subscription = new Subscription();

  isLoggedIn: any;
  skill: any = [];
  email: any;
  mobile: any;
  role: any;
  date: any = Array.from(Array(31).keys()).map((x) => x + 1);
  year: number[] = [];
  pic: string = 'Add Picture';
  togglepg: boolean = false;
  toggleug: boolean = true;
  toggleugg: number = 0;
  togglepgg: number = 0;

  dropdownList: {}[] = (skills as any).default;
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    allowSearchFilter: true,
  };

  constructor(
    private User: UserService,
    private Route: Router,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    
    if (this.User.signupModel._id != undefined) {
      this.email = this.User.signupModel._id;
      this.mobile = this.User.signupModel.phone;
      this.role = this.User.signupModel.role;
    }

    for (
      let i = new Date().getFullYear() - 60;
      i <= new Date().getFullYear() - 18;
      i++
    ) {
      this.year.push(i);
    }
  }

  submit(e: any) {
    console.log(this.User.signupModel);
    this.User.signupModel._id = e.target.email.value;
    this.User.signupModel.fname = e.target.fname.value;
    this.User.signupModel.mname = e.target.mname.value;
    this.User.signupModel.lname = e.target.lname.value;
    this.User.signupModel.phone = e.target.phone.value;
    this.User.signupModel.phone2 = e.target.phone2.value;
    this.User.signupModel.bio = e.target.bio.value;

    this.User.signupModel.school[0].tenth = e.target.schooltenth.value;
    this.User.signupModel.school[0].grade = e.target.gradetenth.value;
    this.User.signupModel.school[1].twelth = e.target.schooltwelth.value;
    this.User.signupModel.school[1].grade = e.target.gradetwelth.value;
    this.User.signupModel.school[1].stream = e.target.stream.value;
    /* this.User.signupModel.college[0].name = e.target.college.value;
    this.User.signupModel.college[0].degree = e.target.degree.value;
    this.User.signupModel.college[0].grade = e.target.gradecollege.value;
    this.User.signupModel.college[0].semester = e.target.semester.value; */
    this.User.signupModel.skills = this.skill;
    this.User.signupModel.address.streetaddress =
      e.target.streetaddress.value + ' ' + e.target.streetaddress2.value;
    this.User.signupModel.address.city = e.target.city.value;
    this.User.signupModel.address.state = e.target.state.value;
    this.User.signupModel.address.zip = e.target.zip.value;
    this.User.signupModel.bday =
      e.target.date.value +
      '/' +
      e.target.month.value +
      '/' +
      e.target.year.value;
    console.log(this.User.signupModel);

    this.User.SignUp(this.User.signupModel).subscribe((res) => {
      if (res == 200) {
        console.log(res);

        this.Route.navigate(['/user/signin']);
      } else {
        console.log(res);
      }
    });
  }

  change1() {
    let size = -1;
    let a = this.el.nativeElement.querySelector('.pic');
    let b = this.el.nativeElement.querySelector('.picp');
    if (typeof a.files != 'undefined') {
      size = a.files[0].size / 1024 / 1024;
      if (size > 5 && size != -1) {
        b.innerHTML = 'Please Select a file less than equal to 5 MB';
        setTimeout(() => {
          b.innerHTML = '';
        }, 1800);
        return;
      }
      this.pic = 'Picture Added';
    }
  }
  change() {
    let sizes = -1;
    let a = this.el.nativeElement.querySelector('#input-files');
    let b = this.el.nativeElement.querySelector('#return');
    console.log(a._files);
    if (typeof a.files != 'undefined') {
      sizes = a.files[0].size / 1024 / 1024;
      if (sizes > 10 && sizes != -1) {
        b.innerHTML = 'Please Select a file less than equal to 10 MB';
        return;
      }
      b.innerHTML = a.value.split('\\')[2];
    }
    /* let data = {
      _id: sessionStorage.getItem('email'),
      file: a.files[0],
    };
    console.log(data) */
    this.User.upload().subscribe((res) => {
      console.log(res);
    });
  }

  onlyone(e: any) {
    if (e == 'yes') {
      this.el.nativeElement.querySelector('#no').checked = false;
    }
    if (e == 'no') {
      this.el.nativeElement.querySelector('#yes').checked = false;
    }
    if (e == 'ugyes') {
      this.el.nativeElement.querySelector('#ugno').checked = false;
      this.toggleugg = 1;
    }
    if (e == 'ugno') {
      this.el.nativeElement.querySelector('#ugyes').checked = false;
      this.toggleugg = 2;
    }
    if (e == 'pgyes') {
      this.el.nativeElement.querySelector('#pgno').checked = false;
      this.togglepgg = 1;
    }
    if (e == 'pgno') {
      this.el.nativeElement.querySelector('#pgyes').checked = false;
      this.togglepgg = 2;
    }
  }

  month(e: any) {
    if (e.target.value == 2) {
      this.date = Array.from(Array(29).keys()).map((x) => x + 1);
    }
  }
  pgtoggle(e: any) {
    e.checked ? (this.togglepg = true) : (this.togglepg = false);
  }
  ugtoggle(e: any) {
    e.checked ? (this.toggleug = true) : (this.toggleug = false);
  }
}
