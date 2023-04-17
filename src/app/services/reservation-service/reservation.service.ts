import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) { }

  apiURLGetRoom = '/';
  apiURLPostReservation = '/';
  getRoomForReservation(form: any): Observable<any> {
    return this.http.post(environment.url + this.apiURLGetRoom, form);
  }

  postReservation(reservation: any): Observable<any> {
    return this.http.post(environment.url + this.apiURLPostReservation, reservation);
  }
}
