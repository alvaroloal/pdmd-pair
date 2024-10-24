import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { SpeciesListComponent } from './species-list/species-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'abilities', component: AbilitiesComponent },  
  { path: 'species', component: SpeciesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
