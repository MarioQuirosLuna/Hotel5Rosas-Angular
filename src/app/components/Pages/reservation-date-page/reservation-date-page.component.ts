import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomsTypeServiceService } from 'src/app/services/rooms-type-service/rooms-type-service.service';

@Component({
  selector: 'app-reservation-date-page',
  templateUrl: './reservation-date-page.component.html',
  styleUrls: ['./reservation-date-page.component.css']
})
export class ReservationDatePageComponent {
  roomTypes: any = [];

  reservationForm = new FormGroup({
    beginDate: new FormControl(''),
    endDate: new FormControl(''),
    roomType: new FormControl('')
  });

  constructor(private service: RoomsTypeServiceService,private router: Router) {
    this.service.getRoomsType().subscribe(roomTypes =>{
      this.roomTypes = roomTypes;
      console.log(this.roomTypes)
    })
  }

  validationReservation(){

    if(true){
      this.router.navigate(['/reservation'])
    }else{
      this.router.navigate(['/reservation-decline'])
    }

  }


}
