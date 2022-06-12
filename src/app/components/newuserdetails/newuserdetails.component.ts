import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export let browserRefresh = false;

@Component({
  selector: 'app-newuserdetails',
  templateUrl: './newuserdetails.component.html',
  styleUrls: ['./newuserdetails.component.scss'],
})
export class NewuserdetailsComponent implements OnInit {
  constructor(
    private User: UserService,
    private Route: Router,
    private el: ElementRef,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.User.signupModel);
    /* if (this.User.signupModel._id == undefined) {
      alert('Refreshing the page lost you data \n Please fill the form again');
      this.Route.navigate(['/user/register']);
    } */
    if (this.User.signupModel._id != undefined) {
      this.email = this.User.signupModel._id;
      this.mobile = this.User.signupModel.phone;
    }

    for (
      let i = new Date().getFullYear() - 60;
      i <= new Date().getFullYear() - 18;
      i++
    ) {
      this.year.push(i);
    }
  }
  email: any;
  mobile: any;
  date: any = Array.from(Array(31).keys()).map((x) => x + 1);
  year: number[] = [];
  pic: string = 'Add Picture';
  togglepg: boolean = false;
  toggleug: boolean = true;
  toggleugg: number = 0;
  togglepgg: number = 0;
  submit(e: any) {
    this.User.signupModel.fname = e.target.fname.value;
    this.User.signupModel.mname = e.target.mname.value;
    this.User.signupModel.lname = e.target.lname.value;
    this.User.signupModel.school[0].tenth = e.target.schooltenth.value;
    this.User.signupModel.school[0].grade = e.target.gradetenth.value;
    this.User.signupModel.school[1].twelth = e.target.schooltwelth.value;
    this.User.signupModel.school[1].grade = e.target.gradetwelth.value;
    this.User.signupModel.school[1].stream = e.target.stream.value;
    this.User.signupModel.college[0].name = e.target.college.value;
    this.User.signupModel.college[0].degree = e.target.degree.value;
    this.User.signupModel.college[0].grade = e.target.gradecollege.value;
    this.User.signupModel.college[0].semester = e.target.semester.value;
    this.User.signupModel.bio = e.target.bio.value;

    console.log(this.User.signupModel);

    this.User.SignUp(this.User.signupModel).subscribe((res) => {
      if (res == 200) {
        console.log(res);
        let link = '/home/' + sessionStorage.getItem('name');
        this.Route.navigate([`${link}`]);
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
        setTimeout(()=>{b.innerHTML=''},1800)
        return;
      }
      this.pic = 'Picture Added';
    }
  }
  change() {
    let size = -1;
    let a = this.el.nativeElement.querySelector('.input-file');
    let b = this.el.nativeElement.querySelector('.file-return');
    if (typeof a.files != 'undefined') {
      size = a.files[0].size / 1024 / 1024;
      if (size > 10 && size != -1) {
        b.innerHTML = 'Please Select a file less than equal to 10 MB';
        return;
      }
      b.innerHTML = a.value.split('\\')[2];
    }
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
