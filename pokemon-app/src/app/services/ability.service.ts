import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ability } from '../models/abilities-list.interface';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {
  private apiUrl = 'https://pokeapi.co/api/v2/ability'; 

  constructor(private http: HttpClient) {}

  getAbilities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  mapAbilitiesWithImages(abilities: any[]): Ability[] {
    return abilities.map(ability => ({
      name: ability.name,
      url: ability.url,
      imageUrl: this.getImageForAbility(ability.name)
    }));
  }


  getImageForAbility(abilityName: string): string {
    return `assets/images/${abilityName}.png`;
  }
}
