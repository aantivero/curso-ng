import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked($event)">OK</button>
    <button (click)="presioname($event)">Presioname</button>
  `,
  styles: []
})
export class EventBindingComponent {

  @Output() clicked = new EventEmitter<string>();

  @Output() presionado = new EventEmitter<string>();

  onClicked() {
    this.clicked.emit('FUNCIONA');
  }

  presioname() {
    this.presionado.emit('alguien presiono el boton');
  }
}
