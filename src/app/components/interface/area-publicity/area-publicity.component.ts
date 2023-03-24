import { Component } from '@angular/core';

@Component({
  selector: 'app-area-publicity',
  templateUrl: './area-publicity.component.html',
  styleUrls: ['./area-publicity.component.css']
})
export class AreaPublicityComponent {
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
