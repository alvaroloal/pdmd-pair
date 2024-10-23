import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AbilitiesComponent } from './abilities/abilities.component';
import { SpeciesListComponent } from './species-list/species-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    AbilitiesComponent,
    SpeciesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
