import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.css']
})
export class AdressFormComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(9)])
    ],
    shipping: [null, Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Pernambuco', abbreviation: 'PE'},
    {name: 'São Paulo', abbreviation: 'SP'},
    {name: 'Rio de Janeiro', abbreviation: 'RJ'},
    {name: 'Alagoas', abbreviation: 'AL'},
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Obrigado! Entraremos em contato.');
  }
}
