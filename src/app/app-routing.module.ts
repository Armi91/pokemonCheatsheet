import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: PokemonListComponent,
                pathMatch: 'full'
            },
            {
                path: 'pokemon/:id',
                component: PokemonDetailsComponent
            }
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}