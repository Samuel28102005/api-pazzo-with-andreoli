import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PooComponent } from './poo/poo.component';

const routes: Routes = [
  {path:'poo/:id', component:PooComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
