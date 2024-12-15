import { Component } from '@angular/core';
import { Residence } from '../model/Residence';
import { Apartment } from '../model/Apartement';
import { FilterArrService } from '../services/filter-arr.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
})
export class ResidenceComponent {
  constructor(private filtredser: FilterArrService) {}
  listFav: Residence[] = [];
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image:
        'https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece',
      status: 'En Construction',
    },
  ];

  showloc(adress: string) {
    if (adress === 'inconnu') {
      alert('Adresse inconnue');
    } else {
      alert('Adresse : ' + adress);
    }
  }

  Like(residence: Residence) {
    if (!this.listFav.includes(residence)) {
      this.listFav.push(residence);
    }
  }
  disponibleResidence = this.filtredser.filtredArr(
    this.listResidences,
    'status',
    'Disponible'
  );
}
