import { Injectable } from '@angular/core';
import { Flight } from './flights.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { 
    this.backEndUrl = this.getBackEndUrl();
  }

  backEndUrl: string;

  //allows home component to subscribe to Observable to get data sent from server
  getFlights(orig: string, dest: string): Observable<any>{
    return this.http.get(`${this.backEndUrl}/flights/query/${orig}/${dest}`);
  }

  getAllFlight(): Observable<any>{
    return this.http.get(`${this.backEndUrl}/flights`);
  }

  getAllOrigins(): Observable<any>{
    return this.http.get(`${this.backEndUrl}/flights/cities/origins`);
  }

  getAllDestinations(): Observable<any>{
    return this.http.get(`${this.backEndUrl}/flights/cities/destinations`);
  }

  postFlight(flight: Flight){
    return this.http.post(`${this.backEndUrl}/flights`, flight).subscribe(data => {
      console.log("data posted to server");
      
    })
  }

  updateFlight(flight: Flight){
    return this.http.patch(`${this.backEndUrl}/flights/${flight.id}/update`, flight);
  }

  deleteFlight(id: number){
    return this.http.delete(`${this.backEndUrl}/flights/${id}/delete`);
  }

  getBackEndUrl(): string {
    const seg = document.URL.split('/');
    const regex = new RegExp(/localhost/);
    return regex.test(seg[2]) ? 'http://localhost:3002' : 'https://shrouded-ravine-23045.herokuapp.com';
  }

}
