import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">OK</button>
  `,
  styles: []
})
export class EventBindingComponent {

  onClicked() {
    alert('boton presionado');
  }
}
