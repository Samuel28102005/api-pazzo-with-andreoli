import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Root2 } from '../models.ts/poo2.models';
import { PokemonServiceService } from '../pokemon-service.service';
import { ActivatedRoute, ParamMap, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.css']
})
export class PooComponent {
obspoo !: Observable <Root2>
ris !: Pokemon []
pokk !: String  | null

constructor(private pokemonn:PokemonServiceService, private route:ActivatedRoute){
this.route.paramMap.subscribe()
}


getrouterparam(params:ParamMap){
this.pokk = params.get('id')
this.obspoo = this.pokemonn.vispokemon(this.pokk)
this.obspoo.subscribe((data:Root2)=>this.ris=data.pokemon)
}




  }

