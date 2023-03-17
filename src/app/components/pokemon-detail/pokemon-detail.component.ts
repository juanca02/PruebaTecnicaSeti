import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit{

  pokemon: any = '';
  pokemonImg = '';
  pokemonType : any[];
  pokemonStats:any[];

  constructor(private activatedRouter: ActivatedRoute,
    private servicePokemon: PokemonService) {

    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemon(id:any) {
    this.servicePokemon.getPokemons(id).subscribe(
      res => {
        console.log(res);
        this.pokemonStats = res.stats;
        console.log(this.pokemonStats);
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types;
      },
      err => {
        console.log(err);
      }
    )
  }
}
