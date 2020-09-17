import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'Casa de praia em Itamaracá';
  owner: string = 'José João';
  imgURL: string = 'https://img.olx.com.br/images/41/419829025112163.jpg';
  description: string = 'Casa de praia em Itamaracá super confortável para até 20 pessoas.';

}
