import { Component } from '@angular/core';
import { PublicityServiceService } from 'src/app/services/publicity-service/publicity-service.service';

@Component({
  selector: 'app-area-publicity',
  templateUrl: './area-publicity.component.html',
  styleUrls: ['./area-publicity.component.css']
})
export class AreaPublicityComponent {

  //publicities: any[] = []

  constructor(private service: PublicityServiceService){
    this.service.getPublicity().subscribe(publicities =>{
      //this.publicities = publicities;
      //console.log(this.publicities);
    });
  };

  publicities = [
    {
      id: "1",
      name: "img 1",
      description: "url",
      img: "../../../../assets/imgs/cocacola2.svg",
    },
    {
      id: "2",
      name: "img 2",
      description: "url",
      img: "../../../../assets/imgs/cocacola.svg",
    },
    {
      id: "3",
      name: "img 3",
      description: "url",
      img: "../../../../assets/imgs/comida.svg",
    }
  ];
}
