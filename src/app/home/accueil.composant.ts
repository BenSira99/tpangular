import { Component } from '@angular/core';

@Component({
    selector: 'app-accueil',
    standalone: true,
    templateUrl: './accueil.composant.html',
    styleUrl: './accueil.composant.css'
})
export class ComposantAccueil {
    cliquerBouton(): void {
        console.log('Bouton cliqué !');
    }
}
