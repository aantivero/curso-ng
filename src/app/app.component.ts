import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Data Binding</h1>
  <app-lifecycle *ngIf="!delete"></app-lifecycle>
  <button (click)="delete = true">Eliminar</button>
  <app-databinding></app-databinding>
  `,
  styles: [
    `h1 {
      color: black
    }`
  ]
})
export class AppComponent {
  title = 'app';
}
