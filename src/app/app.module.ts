import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SigninComponent } from './components/signin/signin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CreatejobComponent } from './components/createjob/createjob.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { NewuserdetailsComponent } from './components/newuserdetails/newuserdetails.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { JoblistingComponent } from './components/joblisting/joblisting.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Error404Component } from './components/error404/error404.component';
import { FeaturedjobsComponent } from './components/featuredjobs/featuredjobs.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SigninComponent,
    NavbarComponent,
    SpinnerComponent,
    CreatejobComponent,
    UsernavComponent,
    SearchresultsComponent,
    NewuserdetailsComponent,
    AboutusComponent,
    ResetpasswordComponent,
    JoblistingComponent,
    DashboardComponent,
    ProfileComponent,
    Error404Component,
    FeaturedjobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
