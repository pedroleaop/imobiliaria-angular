import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdressFormComponent } from './components/adress-form/adress-form.component';
import { AllCardsComponent } from './components/all-cards/all-cards.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
  {path:'',component: NavigationComponent,
  children: [
    {path:'',component:FirstPageComponent},
    {path:'form',component:AdressFormComponent},
    {path:'casas',component:AllCardsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
