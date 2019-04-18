import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserdashComponent } from './userdash/userdash.component';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { HeaderComponent } from './navigation/header/header.component';

import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomepageComponent } from './welcome/homepage/homepage.component';
import { ProfileinfoComponent } from './userprofile/profileinfo/profileinfo.component';
import { DriverauthComponent } from './auth/driverauth/driverauth.component';
import { DriverdashComponent } from './driver/driverdash/driverdash.component';
import { DriverprofileComponent } from './driver/driverprofile/driverprofile.component';
import {MapsComponent} from "./maps/maps.component";
import {MapsService} from "./maps/maps.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";
import {AgmDirectionModule} from "agm-direction";


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserdashComponent,
    HeaderComponent,
    SidenavListComponent,
    HomepageComponent,
    ProfileinfoComponent,
    DriverauthComponent,
    DriverdashComponent,
    DriverprofileComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
      libraries: ["places", "geometry"]
    }),
    AgmDirectionModule,
    HttpClientModule
  ],
  providers: [GoogleMapsAPIWrapper,
              AmplifyService,
              MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
