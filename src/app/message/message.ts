import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class ComposantMessage {
  @Input() contenuMessage: string = '';
}
