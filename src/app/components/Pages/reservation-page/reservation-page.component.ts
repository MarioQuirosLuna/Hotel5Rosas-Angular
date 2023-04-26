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
    const now = new Date();
    const options = { timeZone: 'America/Costa_Rica' };
    const date = now.toLocaleDateString('es-CR', options);
    const time = now.toLocaleTimeString('es-CR', options);
    console.log(date + ' ' + time);


    let reservation = {
      "fK_Habitacion": this.room.pK_habitacion,
      "nombre_Cliente": this.client_name,
      "apellidos_Cliente": this.client_lastname,
      "numero_Tarjeta": this.credit_number,
      "correo": this.email,
      "fecha_Transaccion": date + ' ' + time,
      "fecha_Inicio": this.room.beginDate,
      "fecha_Fin": this.room.endDate,
      "tarifa_Total": this.cost
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
    this.cost = (this.room.tarifa * diffDays);
  }

}
