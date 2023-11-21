import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result, Root } from './models.ts/pokemon.models';
import { PokemonServiceService } from './pokemon-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obspok !: Observable <Root>
  vispok !: Result []

  constructor(private pokemon:PokemonServiceService){
    this.obspok = this.pokemon.searchpokemon()
    this.obspok.subscribe((data:Root)=>this.vispok=data.results)



  }

  url(url:String){
    const parts =url.split('/');
    return parts.at(-2)
  }
}
