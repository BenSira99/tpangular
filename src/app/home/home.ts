import { Component } from '@angular/core';
import { ComposantMessage } from '../message/message';
import { Personne } from '../models/personne.modele';
import { ComposantListePersonnes } from '../liste-personnes/liste-personnes';

@Component({
  selector: 'app-home',
  imports: [ComposantMessage, ComposantListePersonnes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  estAffiche: boolean = false;
  utilisateurActuel: Personne = new Personne('Sira', 'Ben', '06 00 00 00 00');
  listeUtilisateurs: Personne[] = [
    new Personne('Dupont', 'Jean', '01 23 45 67 89'),
    new Personne('Martin', 'Sophie', '06 98 76 54 32'),
    new Personne('Lefebvre', 'Thomas', '07 11 22 33 44')
  ];

  cliquerBouton(): void {
    this.estAffiche = !this.estAffiche;
    console.log('Bouton cliqué, état du message :', this.estAffiche);
  }
}
