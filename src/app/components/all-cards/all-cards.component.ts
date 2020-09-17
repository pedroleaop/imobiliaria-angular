import { Component, OnInit } from '@angular/core';
import { ImoveisApi } from 'src/app/services/imoveis-api/imoveis-api';
import { ImoveisApiService } from 'src/app/services/imoveis-api/imoveis-api.service';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {

  listaImoveis: ImoveisApi[];

  constructor(private imoveisConstructorAll:ImoveisApiService) { }

  ngOnInit(): void {

    this.imoveisConstructorAll.List().subscribe( (lista) => {this.listaImoveis = lista;} )

  }

}
