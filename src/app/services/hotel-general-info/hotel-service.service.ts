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

}
