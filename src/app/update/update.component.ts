import { Component, OnInit } from '@angular/core';
import { Flight } from '../flights.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private flightsService: FlightsService) { }

  flightList: Flight[] = [];

  selectedFlight: Flight;

  origin: string;
  destination: string; 
  flightnumber: number;
  depart: Date;
  arrive: Date;
  nonstop: boolean = false;

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.flightsService.getAllFlight().subscribe(data => {
      this.flightList = data;
    });
  }

  update(){
    const newFlight: Flight = {
      id: this.selectedFlight.id? this.selectedFlight.id : -1,
      origin: this.origin,
      destination: this.destination,
      flightnumber: this.flightnumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    if(newFlight.id == -1){
      return;
    }
    this.flightsService.updateFlight(newFlight).subscribe(data => {
      if(data){
        this.refresh();
      }
    });
  }

  delete() {
    this.selectedFlight.id? this.selectedFlight.id : -1;
    if(this.selectedFlight.id == -1){
      return;
    }
    if(window.confirm('are you sure you want to delete this flight? ')){
      this.flightsService.deleteFlight(this.selectedFlight.id? this.selectedFlight.id : -1).subscribe(data => {
        if(data){
          this.refresh();
        }
      });
    }
    
  }

  toggleNonStop() {
    this.nonstop = !this.nonstop;
  }

  onClick(flight: Flight): void {
    if(flight.id){
      this.selectedFlight = flight;
    }
    console.log(this.selectedFlight.id);
  }

}
