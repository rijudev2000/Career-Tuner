import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CreatejobComponent } from './components/createjob/createjob.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { JoblistingComponent } from './components/joblisting/joblisting.component';
import { NewuserdetailsComponent } from './components/newuserdetails/newuserdetails.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthguardService} from './services/authguard.service'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'AboutUs', component: AboutusComponent },
  { path: 'user/:path', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthguardService] },
  { path: 'jobs', component: JoblistingComponent, canActivate:[AuthguardService] },
  { path: 'postJobs', component: CreatejobComponent, canActivate:[AuthguardService] },
  { path: 'results/:keyword', component: SearchresultsComponent, canActivate:[AuthguardService] },
  { path: 'results/:keyword/:category', component: SearchresultsComponent, canActivate:[AuthguardService] },
  { path: 'results/:keyword/:category/:location', component: SearchresultsComponent, canActivate:[AuthguardService] },
  { path: 'user-details', component: NewuserdetailsComponent },  
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'Error404NotFound', component: Error404Component },
  { path: '**', redirectTo:'Error404NotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService]
})
export class AppRoutingModule { }
