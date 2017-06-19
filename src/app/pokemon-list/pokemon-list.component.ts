import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  pokemons= [];

  ngOnInit() {
    this.pokemonService.getPokemons((pokemons) => {
      this.pokemons = pokemons;
      
    });
}

  
}
