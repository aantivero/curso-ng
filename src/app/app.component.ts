import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Data Binding</h1>
  <app-lifecycle *ngIf="!delete">
    <p #contenido>{{test}}</p>
  </app-lifecycle>
  <button (click)="delete = true">Eliminar</button>
  `,
  styles: [
    `h1 {
      color: black
    }`
  ]
})
export class AppComponent {
  title = 'app';
  test: string = 'Esto es un ejemplo';
}
