import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelServiceService {
  constructor(private http: HttpClient) {}

  apiURL = 'https://localhost:44343/api/Entity_Hotel/GetHotels';

  getHotelInfo(): Observable<any> {
    return this.http.get(this.apiURL);
  }

}
