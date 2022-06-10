import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.scss'],
})
export class CreatejobComponent implements OnInit {
  constructor(private User: UserService, private Route: Router) {}

  ngOnInit(): void {
    /* this.User.Auth().subscribe((res) => {
      if (res.success == false) {
        this.Route.navigate(['/user/signin']);
      }
      else{
        if(sessionStorage.getItem('role')!='Recruiter'){
      this.Route.navigate(['']);
    }
      }
    }); */
  }

  submit(event: any) {
    /* console.log(event.target.jobcategory.value); */
    let data={
      postedby: {email: sessionStorage.getItem('email')},
      jobTitle: event.target.jobTitle.value,
      jobDescription: event.target.jobdescription,
      jobtype: event.target.jobtype,
      salarytype: event.target.salarytype,
      salary: [{minSalary:event.target.minSalary,maxSalary:event.target.maxSalary}],
      companyName: "Jaa teri",
      skills: ["me","mine"],
      deadline: event.target.deadline,
      numberofpos: event.target.numberofpos,
      location: event.target.location
    }
    console.log(data)
    
    /* this.User.postJob(data).subscribe((res)=>{
      console.log(res)
    }) */
  }
}
