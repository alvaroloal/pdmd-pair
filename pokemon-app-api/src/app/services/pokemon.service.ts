// src/services/pokemon.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonList> {
    return this.http.get<PokemonList>(this.apiUrl);
  }
}
