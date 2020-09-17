import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ImoveisApi } from 'src/app/services/imoveis-api/imoveis-api';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnChanges {

  @Input() inputImovel: ImoveisApi;

  adress: string;
  owner: string;
  imgURL: string;
  price: number;
  type: string;

  constructor() { }

  ngOnChanges(): void {
    if(this.inputImovel != null){
      this.imgURL = this.inputImovel.image;
      this.adress = this.inputImovel.adress;
      this.owner = this.inputImovel.owner;
      this.price = this.inputImovel.price;
      this.type = this.inputImovel.type;
    }

  }



}
