import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-name/hotel-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  hotelName: string = '';

  constructor(private service: HotelServiceService) {
    this.service.getHotelInfo().subscribe(hotel =>{
      this.hotelName = hotel[0].nombre
    })
  }



}
