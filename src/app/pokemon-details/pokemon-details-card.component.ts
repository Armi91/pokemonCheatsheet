import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pokemon-details-card',
  templateUrl: './pokemon-details-card.component.html',
  styleUrls: ['./pokemon-details-card.component.css']
})
export class PokemonDetailsCardComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
              private router: Router) { }
  
  @Input()
  pokemon;

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      let id = params['id'];
      // console.log(`ID: ${id}`);
      this.router.navigate(['pokemon', id]);
    })
  }

}
