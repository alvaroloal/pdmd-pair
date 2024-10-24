import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PokemonResponse } from '../interfaces/ipokemon';
import { PokemonDetails } from '../interfaces/ipokemon-details';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http: HttpClient) { }

  getPokemonList(offset ?: number): Observable<PokemonResponse> {

    return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon?limit=12${offset ? `&offset=${offset}` : ''}`);

  }

  getPokemonId(url: string): number{

    return parseInt(url.split('/').filter(x => x).pop() || '0');

  };

  createImgUrl(id: number): string{

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  }

  getPokemonDetails(id: number): Observable<PokemonDetails>{

    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${id}`);

  }

}
