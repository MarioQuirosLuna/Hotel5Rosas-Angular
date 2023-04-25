import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) { }

  apiURLGetRoom = '/Entity_Reserva/GetAvailableRoom';
  apiURLPostReservation = '/Entity_Reserva/SaveReservation';
  getRoomForReservation(beginDate: any, endDate: any, typeRoom: any): Observable<any> {
    return this.http.get(environment.url + this.apiURLGetRoom + '?beginDate=' + beginDate + '&endDate=' + endDate + '&typeRoom=' + typeRoom);
  }

  postReservation(reservation: any): Observable<any> {
    return this.http.post(environment.url + this.apiURLPostReservation, reservation);
  }
}
