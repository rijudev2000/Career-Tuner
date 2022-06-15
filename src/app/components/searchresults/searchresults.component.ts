import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss'],
})
export class SearchresultsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private User: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.searchFilter = param['keyword'].toLowerCase();
      if (param['category'] != undefined) {
        this.searchFilterCategory = param['category'].toLowerCase();
      }
      if (param['location'] != undefined) {
        this.searchFilterLocation = param['location'].toLowerCase();
      }
    });
    this.User.getJobDetails().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        this.data.push(res[i]);
        if (
          this.searchFilter != '' &&
          this.searchFilterCategory == '' &&
          this.searchFilterLocation == ''
        ) {
          var x = res[i].jobTitle.toLowerCase();
          if (x.includes(this.searchFilter)) {
            this.jobData.push(res[i]);
            console.log(this.jobData)
          }
        }
        if (
          this.searchFilter != '' &&
          this.searchFilterCategory != '' &&
          this.searchFilterLocation == ''
        ) {
          var x = res[i].jobTitle.toLowerCase();
          if (x.includes(this.searchFilter)) {
            this.jobData.push(res[i]);
          }
        }
        if (
          this.searchFilter != '' &&
          this.searchFilterCategory != '' &&
          this.searchFilterLocation != ''
        ) {
          var x = res[i].jobTitle.toLowerCase();
          if (x.includes(this.searchFilter)) {
            this.jobData.push(res[i]);
          }
        }
        if (
          this.searchFilter == '' &&
          this.searchFilterCategory != '' &&
          this.searchFilterLocation == ''
        ) {
          var x = res[i].jobcategory.toLowerCase();
          if (x == this.searchFilterCategory) {
            this.jobData.push(res[i]);
          }
        }
        if (
          this.searchFilter == '' &&
          this.searchFilterCategory == '' &&
          this.searchFilterLocation != ''
        ) {
          var x = res[i].jobTitle.toLowerCase();
          if (x.includes(this.searchFilter)) {
            this.jobData.push(res[i]);
          }
        }
        if (
          this.searchFilter == '' &&
          this.searchFilterCategory != '' &&
          this.searchFilterLocation != ''
        ) {
          var x = res[i].jobTitle.toLowerCase();
          if (x.includes(this.searchFilter)) {
            this.jobData.push(res[i]);
          }
        }
      }
      setTimeout(() => {
        this.toggle = true;
      }, 2000);
    });
  }

  searchFilter: string = '';
  searchFilterCategory: string = '';
  searchFilterLocation: string = '';
  data: any = [];
  jobData: any = [];
  like = faHeart;
  toggle: boolean = false;
}
