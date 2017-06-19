import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonDetailsCardComponent } from './pokemon-details-card.component';

import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PokemonDetailsRoutingModule
  ],
  declarations: [
    PokemonDetailsComponent,
    PokemonDetailsCardComponent
  ]
})
export class PokemonDetailsModule { }
