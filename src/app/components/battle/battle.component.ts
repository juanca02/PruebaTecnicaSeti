import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent {

  constructor(private servicePokemon: PokemonService){
  }


  ngOnInit(): void {
    
  }


}
