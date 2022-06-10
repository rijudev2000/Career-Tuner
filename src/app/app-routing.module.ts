import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CreatejobComponent } from './components/createjob/createjob.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NewuserdetailsComponent } from './components/newuserdetails/newuserdetails.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user/:path', component: SigninComponent },
  { path: 'user/:path/*', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home/:username/*', component: HomeComponent },
  { path: 'postJobs', component: CreatejobComponent },
  { path: 'results/:keyword', component: SearchresultsComponent },
  { path: 'results/:keyword/:category', component: SearchresultsComponent },
  { path: 'results/:keyword/:category/:location', component: SearchresultsComponent },
  { path: 'user-details', component: NewuserdetailsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: '**', component: HomeComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
