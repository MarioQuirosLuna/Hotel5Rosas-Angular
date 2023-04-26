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
    this.serviceReservation.getRoomForReservation(this.reservationForm.value.beginDate, this.reservationForm.value.endDate, this.reservationForm.value.roomType)
      .subscribe((response: any) => {
        this.rooms = response;
        const data = this.rooms;
        data.beginDate = this.reservationForm.value.beginDate;
        data.endDate = this.reservationForm.value.endDate;
        if (this.rooms) {
          this.router.navigate(['/reservation'], { queryParams: { data: JSON.stringify(data) } })
        } else {
          this.router.navigate(['/reservation-decline'])
        }
      })
  }
}
