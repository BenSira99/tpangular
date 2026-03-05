import { Component } from '@angular/core';
import { ComposantMessage } from '../message/message';

@Component({
  selector: 'app-home',
  imports: [ComposantMessage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  estAffiche: boolean = false;

  cliquerBouton(): void {
    this.estAffiche = !this.estAffiche;
    console.log('Bouton cliqué, état du message :', this.estAffiche);
  }
}
