import { Component, OnInit } from '@angular/core';
import { Flight } from '../flights.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private flightsService: FlightsService) { }

  origin: string;
  destination: string; 
  flightnumber: number;
  depart: Date;
  arrive: Date;
  nonstop: boolean = false;

  ngOnInit(): void {
  }

  toggleNonStop(){
    this.nonstop = !this.nonstop;
    console.log(this.nonstop);
    
  }

  sendFlight(){
    const flight: Flight = {
      origin: this.origin,
      destination: this.destination,
      flightnumber: this.flightnumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    this.flightsService.postFlight(flight);
    console.log(flight);
    
  }

}
