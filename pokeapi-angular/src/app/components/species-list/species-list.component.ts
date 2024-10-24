import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent {
  types: any[] = []; 

  constructor(private speciesService: SpeciesService) {}

  ngOnInit() {
    this.getPokemonTypes(); 
  }

  getPokemonTypes() {
    this.speciesService.getPokemonTypes().subscribe((data: any) => {
      this.types = data.results;
    });
  }

  
  getTypeIcon(type: string): string {
    return `https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type}.svg`;
  }

  getBackgroundColor(type: string): string {
    const colors: any = {
      normal: '#A8A77A',
      fighting: '#C22E28',
      flying: '#A98FF3',
      poison: '#A33EA1',
      ground: '#E2BF65',
      rock: '#B6A136',
      bug: '#A6B91A',
      ghost: '#735797',
      steel: '#B7B7CE',
      fire: '#EE8130',
      water: '#6390F0',
      grass: '#7AC74C',
      electric: '#F7D02C',
      psychic: '#F95587',
      ice: '#96D9D6',
      dragon: '#6F35FC',
      dark: '#705746',
      fairy: '#D685AD',
      stellar: '#A98FF3',
      unknown: '#B7B7CE'
    };
  
    return colors[type.toLowerCase()] || '#777';
  }


  
  
}
