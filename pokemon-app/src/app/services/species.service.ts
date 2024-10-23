// species.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Species } from '../models/species-list.interface';

interface SpeciesResponse {
  results: Species[];
}

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(private http: HttpClient) {}

  getSpecies(): Observable<Species[]> {
    return this.http.get<SpeciesResponse>(this.apiUrl).pipe(
      map(response => response.results) // Extrae solo la propiedad 'results'
    );
  }
}
