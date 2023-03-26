import { Component } from '@angular/core';

@Component({
  selector: 'app-rates-page',
  templateUrl: './rates-page.component.html',
  styleUrls: ['./rates-page.component.css']
})
export class RatesPageComponent {
  rates = [
    {
      Nombre: "Standard",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.",
      Tarifa: 100000,
      Imagen: "https://picsum.photos/400/400",
      Caracteristicas: [
        {
          Nombre: "Cama King Size",
        }
      ],
      Ofertas: [
        {
          Nombre: "Oferta 1",
          FechaInicio: "2023-01-01",
          FechaFin: "2023-01-31"
        },
        {
          Nombre: "Oferta 2",
          FechaInicio: "2023-02-01",
          FechaFin: "2023-02-31"
        }
      ]
    },
    {
      Nombre: "Junior Suite",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.",
      Tarifa: 200000,
      Imagen: "https://picsum.photos/400/400",
      Caracteristicas: [
        {
          Nombre: "Cama King Size",
        },
        {
          Nombre: "Sala de estar",
        },
      ],
      Ofertas: [
        {
          Nombre: "Oferta 1",
          FechaInicio: "2023-01-01",
          FechaFin: "2023-01-31"
        }
      ]
    },
    {
      Nombre: "Presidential Suite",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.",
      Tarifa: 500000,
      Imagen: "https://picsum.photos/400/400",
      Caracteristicas: [
        {
          Nombre: "Cama King Size",
        },
        {
          Nombre: "Jacuzzi",
        },
        {
          Nombre: "Sala de estar",
        },
        {
          Nombre: "Cocina",
        },
        {
          Nombre: "Terraza",
        },
      ],
      Ofertas: [
        {
          Nombre: "Oferta 1",
          FechaInicio: "2023-01-01",
          FechaFin: "2023-01-31"
        }
      ]
    }
  ];
}
