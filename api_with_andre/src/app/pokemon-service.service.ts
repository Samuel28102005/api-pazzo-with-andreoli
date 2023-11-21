import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root } from './models.ts/pokemon.models';
import { Root2 } from './models.ts/poo2.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http:HttpClient) {
   }

   
   searchpokemon(){

    return this.http.get<Root>(`https://pokeapi.co/api/v2/type`)

   }

   vispokemon(w:String | null){

    return this.http.get<Root2>(`https://pokeapi.co/api/v2/type/${w}/`)

   }
}
