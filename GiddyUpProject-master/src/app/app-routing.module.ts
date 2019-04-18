import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {UserdashComponent} from './userdash/userdash.component';
import {HomepageComponent} from './welcome/homepage/homepage.component';
import {DriverauthComponent} from './auth/driverauth/driverauth.component';
import {DriverdashComponent} from './driver/driverdash/driverdash.component';
import {MapsComponent} from "./maps/maps.component";

const routes: Routes = [{
  path: 'profile',
  component: MapsComponent
},
  {
    path: 'login',
    component: AuthComponent
  },
  { path: '',
    component: HomepageComponent
  },
  { path: 'signup',
    component: DriverauthComponent
  },
  { path: 'driverdash',
    component: DriverdashComponent
  },
  {
    path: 'map',
    component: MapsComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
