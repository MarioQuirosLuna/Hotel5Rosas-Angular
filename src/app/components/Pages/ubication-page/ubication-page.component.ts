import { Component } from '@angular/core';
import { UbicationServiceService } from 'src/app/services/ubication-service/ubication-service.service';

@Component({
  selector: 'app-ubication-page',
  templateUrl: './ubication-page.component.html',
  styleUrls: ['./ubication-page.component.css']
})
export class UbicationPageComponent {
  ubication: string = '';

  constructor(private service: UbicationServiceService) {
    this.service.getUbication().subscribe(ubication =>{
      this.ubication = ubication[0].informacion
      console.log(ubication)
    })
  }
}
