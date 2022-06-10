import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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

  update(Obj:any):Observable<any> {
    return this.http.put(`${this.URL}/api/user/my-details/newjob`, Obj, this.config);
  }
}
