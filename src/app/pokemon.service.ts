import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {

  constructor(private http: Http) { }

  pokemons = [];
  pokemon = {};
  forms = {};
  
  findPokemons(cb){
    let url = "http://pokeapi.co/api/v2/pokemon/?limit=20";
    this.http.get(url)
      .map(res => res.json())
      .subscribe(pokemons =>{
        pokemons.results.map((row) =>{
          this.http.get(row.url)
          .subscribe((data) => {
            let pokemon = data.json();
            let singlePokemon = {
              'id': pokemon.name,
              'name': pokemon.name,
              'image': pokemon.sprites.front_default,
              'hp': pokemon.stats[5].base_stat
            }
            this.pokemons.push(singlePokemon);
          })
        })
        cb(this.pokemons);
      })
  }

  getPokemons(cb){
    this.findPokemons(cb);
  }
// Checkpoint
  findPokemon(id, callback){
    let urlPokemon = `http://pokeapi.co/api/v2/pokemon/${id}`;
    let urlSecies = `http://pokeapi.co/api/v2/pokemon-species/${id}`;
    this.http.get(urlPokemon)
      .subscribe((res: Response) => {
        let data = res.json();
        let name = data.name,
          image = data.sprites.front_default,
          speed = data.stats[0].base_stat,
          attack = data.stats[4].base_stat,
          defense = data.stats[3].base_stat,
          hp = data.stats[5].base_stat;
        let firstFormName,
            firstFormId,
            secondFormName,
            secondFormId,
            thirdFormName,
            thirdFormId;
        
        this.http.get(urlSecies)
          .subscribe((response) => {
            let dataSpecies = response.json();
            this.http.get(dataSpecies.evolution_chain.url)
              .subscribe((resChain: Response) => {
                let dataChain = resChain.json();
                firstFormName = {'firstFormName': dataChain.chain.species.name},
                secondFormName = {'secondFormName': dataChain.chain.evolves_to[0].species.name},
                thirdFormName = {'thirdFormName': dataChain.chain.evolves_to[0].evolves_to[0].species.name};
                Object.assign(this.pokemon, firstFormName, secondFormName, thirdFormName);
              });
          })
  
        this.pokemon = {
            name,
            image,
            speed,
            attack,
            defense,
            hp
          }
        
        callback(this.pokemon);
      });
  }

  getPokemon(id, callback){
    this.findPokemon(id, callback);
  }

  getChain(chainID){
    
  }
}