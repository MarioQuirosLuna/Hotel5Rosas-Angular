import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  galeria = [
    {
      Imagen: 'https://picsum.photos/401/400',
    },
    {
      Imagen: 'https://picsum.photos/402/400',
    },
    {
      Imagen: 'https://picsum.photos/403/400',
    },
    {
      Imagen: 'https://picsum.photos/404/400',
    },
    {
      Imagen: 'https://picsum.photos/405/400',
    },
    {
      Imagen: 'https://picsum.photos/406/400',
    },
    {
      Imagen: 'https://picsum.photos/407/400',
    },
    {
      Imagen: 'https://picsum.photos/408/400',
    },
    {
      Imagen: 'https://picsum.photos/409/400',
    },
    {
      Imagen: 'https://picsum.photos/410/400',
    }
  ];
  ImagenDefault = this.galeria[0].Imagen;

  constructor() { }

  showImage(image: string) {
    this.ImagenDefault = image;
  }


}
