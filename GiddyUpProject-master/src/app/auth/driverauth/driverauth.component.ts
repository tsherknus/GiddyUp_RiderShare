import { Component, OnInit } from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-driverauth',
  templateUrl: './driverauth.component.html',
  styleUrls: ['./driverauth.component.css']
})
export class DriverauthComponent implements OnInit {
  isAuth = false;
  constructor(private  amplifyService: AmplifyService, private  routerIndex: Router) {
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$.subscribe(authState => {
      if (authState.state === 'signedIn') {
        this.routerIndex.navigateByUrl('/driverdash');
        this.isAuth = true;
      }
    });
  }

  ngOnInit() {
  }

}
