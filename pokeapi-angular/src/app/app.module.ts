import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonImgPipe } from './pipes/pokemon-img.pipe';
import { BattleComponent } from './pages/battle/battle.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';



@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PageNotFoundComponent,
    PokemonDetailsComponent,
    ItemListComponent,
    MenuComponent,
    SpeciesListComponent,
    HomeComponent,
    FooterComponent,
    BattleComponent,
    PokemonComponent,
    PokemonImgPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LottieComponent
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
