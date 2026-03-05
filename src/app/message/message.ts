import { Component, Input } from '@angular/core';
import { Personne } from '../models/personne.modele';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class ComposantMessage {
  @Input() personneAffichee: Personne | null = null;
}
