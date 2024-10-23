import { Component, OnInit } from '@angular/core';
import { AbilityService } from '../services/ability.service';
import { Ability } from '../models/abilities-list.interface';


@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  abilities: Ability[] = [];
  limitedAbilities: Ability[] = []; // Nuevo array para habilidades limitadas
  loading: boolean = true;
  error: string | null = null;

  constructor(private abilityService: AbilityService) {}

  ngOnInit(): void {
    this.getAbilities();
  }

  getAbilities() {
    this.loading = true; 
    this.abilityService.getAbilities().subscribe(
      (data: any) => {
        this.abilities = this.abilityService.mapAbilitiesWithImages(data.results);
        this.limitedAbilities = this.abilities.slice(0, 10); // 10 habi
        this.loading = false;  
      },
      (error) => {
        console.error('Error fetching abilities:', error);
        this.error = 'Failed to load abilities. Please try again.';
        this.loading = false;  
      }
    );
  }
}
