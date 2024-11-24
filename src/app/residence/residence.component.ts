import { Component } from '@angular/core';
import { Residence } from '../model/Residence';
import { Apartment } from '../model/Apartement';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
})
export class ResidenceComponent {
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
  /*
    listApartments:Apartment[]=[
      {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"AppartementS+1","residence":this.listResidences[0] },
      {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"AppartementS+2","residence":this.listResidences[0] },
      {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"AppartementS+3","residence":this.listResidences[1] },
    ]

    showAPart(id:number){
    this.listAPP=  this.listApartments.filter((app)=>app.residence.id==id);
    console.log(this.listAPP);
    }

    fav(i:number){
      this.listFav.push(this.listApartments[i]);
      console.log(this.listFav);
    }

  */

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
}
