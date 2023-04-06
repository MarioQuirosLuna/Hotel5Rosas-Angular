import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent {

  constructor(private router: Router) {}

  cost = ''

  validationReservation(){

    if(true){
      this.router.navigate(['/reservation-accept'])
    }

  }

}
