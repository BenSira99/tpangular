import { Component } from '@angular/core';
import { ComposantMessage } from '../message/message';
import { Personne } from '../models/personne.modele';

@Component({
  selector: 'app-home',
  imports: [ComposantMessage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  estAffiche: boolean = false;
  utilisateurActuel: Personne = new Personne('Sira', 'Ben', '06 00 00 00 00');

  cliquerBouton(): void {
    this.estAffiche = !this.estAffiche;
    console.log('Bouton cliqué, état du message :', this.estAffiche);
  }
}
