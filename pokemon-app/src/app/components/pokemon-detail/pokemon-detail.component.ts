import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Importar NgbActiveModal
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemonName!: string;  // Recibe el nombre del Pokémon desde el componente padre
  pokemonDetails: any;  // Detalles del Pokémon

  constructor(private pokemonService: PokemonService, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.loadPokemonDetails();  // Cargar detalles del Pokémon al inicializar el componente
  }

 
  loadPokemonDetails(): void {
    this.pokemonService.getPokemonDetails(this.pokemonName).subscribe(
      (details) => {
        this.pokemonDetails = details;
      },
      (error) => {
        console.error('Error fetching Pokémon details:', error);
      }
    );
  }

  
  dismissModal(): void {
    this.activeModal.dismiss();
  }

  

}
