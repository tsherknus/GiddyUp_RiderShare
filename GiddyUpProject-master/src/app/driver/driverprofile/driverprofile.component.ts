import { Component, OnInit } from '@angular/core';
import {APIService, } from '../../API.service';
import {AmplifyService} from 'aws-amplify-angular';
import {Router} from '@angular/router';
import {Driver} from '../../driver';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-driverprofile',
  templateUrl: './driverprofile.component.html',
  styleUrls: ['./driverprofile.component.css']
})
export class DriverprofileComponent implements OnInit {
  userId: string;
  userName: string;
  driverCreated: boolean;
  showPhoto: boolean;

  driver = new Driver('', '', '', '', '', '', '');
  constructor(private api: APIService, private  amplifyService: AmplifyService, private  routerIndex: Router) {
    this.amplifyService
      .auth().currentAuthenticatedUser().then(driver => {this.userName = driver.username; } );
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({bypassCache: false}).then( async driver => {
      this.userId = driver.attributes.sub;
      this.userName = driver.username;
      const  result = await this.api.GetDriver(this.userId);
      if (!result) {
        this.driverCreated = false;
        this.driver = new Driver('', '', '', '', '', '', '');
      } else {
        this.driverCreated = true;
        this.showPhoto = !!result.image;
        this.driver = new Driver(this.userId,
          result.username,
          result.firstName,
          result.lastName,
          result.phoneNumber,
          result.address,
          result.image
        );
      }
    })
      .catch(err => console.log(err));
  }
 /* getType(): string {
    return this.driverCreated ? 'CreateDriver' : 'UpdateDriver';
  }*/
  async updateProfile() {
    const driver = {
      id: this.userId,
      username: this.userName,
      firstName: this.driver.firstName,
      lastName: this.driver.lastName,
      phoneNumber: this.driver.phoneNumber,
      address: this.driver.address,
    };
    // await this.api[this.getType()](driver);
    await  this.api.CreateDriver(driver);
  }
}
