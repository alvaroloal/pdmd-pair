import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokemonList } from '../models/pokemon-list.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  totalPokemons: number = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data.results;
      this.totalPokemons = data.count;
    });
  }


  getPokemonImage(url: string): string {
    const id = url.split('/')[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}
