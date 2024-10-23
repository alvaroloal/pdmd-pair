import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { AbilitiesComponent } from './abilities/abilities.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent },
  { path: 'abilities', component: AbilitiesComponent },   // Mueve esta ruta antes de '**'
  { path: '**', component: PageNotFoundComponent }        // Pon la ruta '**' al final
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
