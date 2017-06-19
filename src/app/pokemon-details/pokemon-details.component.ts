import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';


// import { TitleCase } from '../titlecase.pipe';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(private pokemonService: PokemonService,
              private activeRoute: ActivatedRoute) { }

  pokemon = {};

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      let id = this.activeRoute.snapshot.params['id'];
      this.pokemonService.getPokemon(id, (pokemon) => {
        this.pokemon = pokemon;
      });
    })


    
  }

}
