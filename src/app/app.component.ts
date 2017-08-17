import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Data Binding</h1>
  <app-lifecycle *ngIf="!delete" [vinculado]="vinculante">
    <p #contenido>{{test}}</p>
  </app-lifecycle>
  <button (click) = "delete = true">Ocultar</button>
  <button (click) = "delete = false">Ver</button>
  <button (click) = "vinculante = vinculante + 10">Incrementar</button>
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
  vinculante: number = 10;
}
