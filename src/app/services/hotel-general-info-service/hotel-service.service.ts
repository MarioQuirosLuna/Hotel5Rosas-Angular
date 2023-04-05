import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HotelServiceService {
  constructor(private http: HttpClient) {}

  apiURL = '/Entity_Hotel/GetHotels';
  getHotelName(): Observable<any> {//Hotel Name
    return this.http.get(environment.url+this.apiURL);
  }

  apiURLPhones = '/Entity_Telefono/GetPhones';
  getHotelPhones(): Observable<any> {
    return this.http.get(environment.url+this.apiURLPhones);
  }

  apiURLEmails = '/Entity_Correo/GetMails';
  getHotelEmails(): Observable<any> {
    return this.http.get(environment.url+this.apiURLEmails);
  }

}
