import { Component } from '@angular/core';
import { HomeInfoService } from 'src/app/services/home-info/home-info.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  hotelName: string = '';
  information: string = '';

  constructor(private service: HomeInfoService) {
    this.service.getHomeInfo().subscribe(hotelInfo =>{
      this.hotelName = hotelInfo.titulo
      this.information = hotelInfo.informacion
      console.log(hotelInfo)
    })
  }

}
