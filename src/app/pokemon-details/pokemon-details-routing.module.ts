import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonDetailsCardComponent } from './pokemon-details-card.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'pokemon',
                component: PokemonDetailsComponent,
                children: [
                    {
                        path: ':id',
                        component: PokemonDetailsCardComponent
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})

export class PokemonDetailsRoutingModule {}