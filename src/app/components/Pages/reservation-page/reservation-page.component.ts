import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation-service/reservation.service';

import { dateCR } from 'src/app/Utility/dateCR';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent {

  room: any;
  numberDays: Number = 0;
  cost: Number = 0;
  costWithDiscount: Number = 0;
  client_name: string = '';
  client_lastname: string = '';
  credit_number: string = '';
  email: string = '';

  constructor(private serviceReservation: ReservationService, private ActivatedRouter: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const data = this.ActivatedRouter.queryParams.subscribe(params => {
      this.room = JSON.parse(params['data']);
    });
    this.calculateCost();
  }

  validationReservation() {
    let reservation = {
      "fK_Habitacion": this.room.pK_habitacion,
      "nombre_Cliente": this.client_name,
      "apellidos_Cliente": this.client_lastname,
      "numero_Tarjeta": this.credit_number,
      "correo": this.email,
      "fecha_Transaccion": dateCR(),
      "fecha_Inicio": this.room.beginDate,
      "fecha_Fin": this.room.endDate,
      "tarifa_Total": this.costWithDiscount
    };
    this.serviceReservation.postReservation(reservation).subscribe(() => {
      this.router.navigate(['/reservation-accept'])
    })
  }

  calculateCost() {
    const beginDate = new Date(this.room.beginDate);
    const endDate = new Date(this.room.endDate);
    const diffTime = Math.abs(endDate.getTime() - beginDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    this.numberDays = diffDays;
    let totalCost = (this.room.tarifa * diffDays);
    this.cost = totalCost
    if (this.room.oferta != 0) {
      this.costWithDiscount = (totalCost - (totalCost * (this.room.oferta / 100)));
    } else {
      this.costWithDiscount = totalCost;
    }
  }

  cancel() {
    this.router.navigate(['/reservation-dates'])
  }

}
