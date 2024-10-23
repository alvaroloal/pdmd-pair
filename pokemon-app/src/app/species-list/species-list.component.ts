// species-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Species } from '../models/species-list.interface';
import { SpeciesService } from '../services/species.service'; // Cambia a SpeciesService

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  species: Species[] = [];

  constructor(private speciesService: SpeciesService) {} // Cambia a SpeciesService

  ngOnInit(): void {
    this.loadSpecies();
  }

  loadSpecies(): void {
    this.speciesService.getSpecies().subscribe(
      (data: Species[]) => {
        this.species = data;
      },
      (error) => {
        console.error('Error fetching species:', error); // Manejo de errores
      }
    );
  }
}
