import { Component, OnInit } from '@angular/core';
import {APIService} from '../../API.service';
import {AmplifyService} from 'aws-amplify-angular';
import {Router} from '@angular/router';
import {Driver} from '../../driver';
import {Auth} from 'aws-amplify';
@Component({
  selector: 'app-driverdash',
  templateUrl: './driverdash.component.html',
  styleUrls: ['./driverdash.component.css']
})
export class DriverdashComponent implements OnInit {

  driverId: string;
  userName: string;
  driver = new Driver('', '', '', '', '', '', '');
  constructor(private api: APIService, private  amplifyService: AmplifyService, private  routerIndex: Router) {
    this.amplifyService
      .auth()
      .currentAuthenticatedUser()
      .then(driver => { this.userName = driver.username;
      });
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({bypassCache: false}).then(async driver =>  {
      this.driverId = driver.attributes.sub;
      this.userName = driver.username;
    })
      .catch(err => console.log(err));
  }
  async updateProfile() {
    const user = {
      id: this.driverId,
      username: this.userName,
      firstName: this.driver.firstName,
      lastName: this.driver.lastName,
      phoneNumber: this.driver.phoneNumber,
      address: this.driver.address
    };
    await this.api.CreateUser(user);
  }
}
