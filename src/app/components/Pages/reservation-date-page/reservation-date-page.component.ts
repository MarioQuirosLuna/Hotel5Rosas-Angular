import { Component } from '@angular/core';
import { RoomsTypeServiceService } from 'src/app/services/rooms-type-service/rooms-type-service.service';

@Component({
  selector: 'app-reservation-date-page',
  templateUrl: './reservation-date-page.component.html',
  styleUrls: ['./reservation-date-page.component.css']
})
export class ReservationDatePageComponent {
  roomTypes: any = [];

  constructor(private service: RoomsTypeServiceService) {
    this.service.getRoomsType().subscribe(roomTypes =>{
      this.roomTypes = roomTypes;
      console.log(this.roomTypes)
    })
  }
}
