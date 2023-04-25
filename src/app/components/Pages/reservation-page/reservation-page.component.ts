import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation-service/reservation.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent {

  room: any;
  numberDays: Number = 0;
  cost: Number = 0;

  constructor(private serviceReservation: ReservationService, private ActivatedRouter: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const data = this.ActivatedRouter.queryParams.subscribe(params => {
      this.room = JSON.parse(params['data']);
    });
    this.calculateCost();
  }

  validationReservation() {

    // this.serviceReservation.postReservation(this.reservationForm.value).subscribe(() => {
    //     this.router.navigate(['/reservation-accept'])
    // })

    this.router.navigate(['/reservation-accept'])

  }

  calculateCost() {
    const beginDate = new Date(this.room.beginDate);
    const endDate = new Date(this.room.endDate);
    const diffTime = Math.abs(endDate.getTime() - beginDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    this.numberDays = diffDays;
    this.cost = (this.room.tarifa * diffDays);
  }

}
