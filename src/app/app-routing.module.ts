import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleComponent } from './components/battle/battle.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: 'home', component: PokemonListComponent},
  {path: 'pokeDetail/:id', component: PokemonDetailComponent},
  {path: 'battle', component: BattleComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
