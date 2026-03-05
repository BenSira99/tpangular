import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComposantAccueil } from './home/accueil.composant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComposantAccueil],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly title = signal('tp-angular');
}
