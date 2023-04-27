import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FacilitiesServiceService } from 'src/app/services/facilities-service/facilities-service.service';

@Component({
  selector: 'app-facilities-page',
  templateUrl: './facilities-page.component.html',
  styleUrls: ['./facilities-page.component.css']
})
export class FacilitiesPageComponent {

  facilities: any = [];

  constructor(private service: FacilitiesServiceService) {
    this.service.getHotelFacilities().subscribe(facilities => {
      this.facilities = facilities;
    })
  }

}
