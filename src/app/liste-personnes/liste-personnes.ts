import { Component, Input } from '@angular/core';
import { Personne } from '../models/personne.modele';

@Component({
  selector: 'app-liste-personnes',
  standalone: true,
  imports: [],
  templateUrl: './liste-personnes.html',
  styleUrl: './liste-personnes.css',
})
export class ComposantListePersonnes {
  @Input() tableauPersonnes: Personne[] = [];
}
