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
  imgURL: string = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  description: string = 'Casa de praia em Itamaracá super confortável para até 20 pessoas.';

}
