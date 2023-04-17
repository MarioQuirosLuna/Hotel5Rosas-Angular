import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation-service/reservation.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent {

  reservationForm: FormGroup;

  constructor(private serviceReservation: ReservationService, private router: Router) {
    this.reservationForm = new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      creditCard: new FormControl(''),
      // room: new FormControl(''),
      // beginDate: new FormControl(''),
      // endDate: new FormControl(''),
      // totalRate: new FormControl('')
    });
  }

  cost = ''

  validationReservation() {

    // this.serviceReservation.postReservation(this.reservationForm.value).subscribe(() => {
    //     this.router.navigate(['/reservation-accept'])
    // })

    this.router.navigate(['/reservation-accept'])

  }

}
