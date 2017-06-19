import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

import { AppRoutingModule } from './app-routing.module';
import { PokemonDetailsModule } from './pokemon-details/pokemon-details.module';

import { PokemonService } from './pokemon.service';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PokemonDetailsModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
