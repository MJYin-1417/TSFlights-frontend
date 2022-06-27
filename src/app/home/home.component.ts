import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flights.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[] = [];
  selectedOrigin: string = "";
  selectedDestination: string = "";
  filteredOrigins: any[] = [];
  filteredDestinations: any[] = [];

  constructor(private flightsService: FlightsService) { }
  ngOnInit(): void {
    this.flightsService.getAllOrigins().subscribe(data => {
      this.filteredOrigins = data;
    });
    this.flightsService.getAllDestinations().subscribe(data => {
      this.filteredDestinations = data;
    });
    this.flightsService.getAllFlight().subscribe(data => {
      this.flights = data;
    })
  }

  query(): void {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;
    this.flightsService.getFlights(origin, destination).subscribe(data => {
      this.flights = data;
    });
  }

  //Debugging
  // getArray(): void {
  //   console.log(this.flights);
  // }

}
