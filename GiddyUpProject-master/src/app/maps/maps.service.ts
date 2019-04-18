import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MapsService {
  constructor(private http: HttpClient) {

  }
  testMethod():Observable<any> {
    return this.http.get('https://ime5fq2hn5.execute-api.us-east-1.amazonaws.com/Dev/?customerid=1234%27');
  }

  //
  // getDistance(dLat: any, dLong: any, rLat: any, rLong):Observable<any> {
  //   return this.http.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615,-73.89188969999998&key=AIzaSyCEtz2tnF2ocwC-yE1JAxSHdHc65fLerN4')
  //   // }
}
