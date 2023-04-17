import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomsTypeServiceService } from 'src/app/services/rooms-type-service/rooms-type-service.service';
import { ReservationService } from 'src/app/services/reservation-service/reservation.service';

@Component({
  selector: 'app-reservation-date-page',
  templateUrl: './reservation-date-page.component.html',
  styleUrls: ['./reservation-date-page.component.css']
})
export class ReservationDatePageComponent {
  roomTypes: any = [];
  rooms: any = [];

  reservationForm: FormGroup;

  constructor(private serviceRoom: RoomsTypeServiceService, private serviceReservation: ReservationService, private router: Router) {
    this.reservationForm = new FormGroup({
      beginDate: new FormControl(''),
      endDate: new FormControl(''),
      roomType: new FormControl('')
    });

    this.serviceRoom.getRoomsType().subscribe(roomTypes => {
      this.roomTypes = roomTypes;
    })
  }

  searchRoom() {
    // this.serviceReservation.getRoomForReservation(this.reservationForm.value)
    //   .subscribe((response: any) => {
    //     this.rooms = response;
    //     if (this.rooms.length > 0) {
    //       this.router.navigate(['/reservation'])
    //     } else {
    //       this.router.navigate(['/reservation-decline'])
    //     }
    //   })
    console.log(this.reservationForm.value);
    if (true) {
      this.router.navigate(['/reservation'])
    } else {
      this.router.navigate(['/reservation-decline'])
    }
  }
}
