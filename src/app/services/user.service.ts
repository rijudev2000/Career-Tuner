import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private config = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': environment.baseUrl,
    }),
    withCredentials: true,
  };
  URL = environment.baseUrl;
  signupModel: UserData = new UserData();
  isAuthenticated = new BehaviorSubject<boolean>(false);

  Auth(): Observable<any> {
    return this.http.get(`${this.URL}/api/user/auth`, this.config);
  }

  Login(Obj: {}): Observable<any> {
    return this.http.post(`${this.URL}/api/user/log-in`, Obj, this.config);
  }

  SignUp(Obj: {}): Observable<any> {
    return this.http.post(`${this.URL}/api/user/register`, Obj, this.config);
  }

  Logout(): Observable<any> {
    return this.http.get(`${this.URL}/api/user/logout`, this.config);
  }

  getUserDetails(Obj: any): Observable<any> {
    return this.http.get(`${this.URL}/api/user/my-details/${Obj}`, this.config);
  }

  getJobDetails(): Observable<any> {
    return this.http.get(`${this.URL}/api/jobs/getJobs`, this.config);
  }

  postJob(Obj: {}): Observable<any> {
    return this.http.post(`${this.URL}/api/jobs/postJobs`, Obj, this.config);
  }

  getJobSingleDetail(Obj: any): Observable<any> {
    return this.http.get(`${this.URL}/api/jobs/job/${Obj}`, this.config);
  }

  update(Obj: any): Observable<any> {
    return this.http.put(
      `${this.URL}/api/user/my-details/newjob`,
      Obj,
      this.config
    );
  }

updateJob(Obj:any,id:any): Observable<any> {
  return this.http.post(
    `${this.URL}/api/jobs/job/${id}`,
    Obj,
    this.config
  );
}

  upload(): Observable<any> {
    return this.http.post(`${this.URL}/api/user/upload-file`, {}, this.config);
  }

  getSkills(): Observable<any> {

    return this.http.get(
      'https://skillsapi.itsyourskills.com/popular-categories',
      {
        headers: new HttpHeaders({
          /* 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImljZWJveXozMDhyaWp1QGdtYWlsLmNvbSIsImV4cGlyZXMiOjE2NTUyMzc2MjIuNTc0NTU1NH0.pVMmahS45LL-yGpKeN-Fb-XplRB7YaBYR92xrhEh11Y',
        */ }),
      }
    );
  }
}
