import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hola Mundo</h1>
  <app-micomponent></app-micomponent>
  `,
  styles: [
    `h1 {
      color: red
    }`
  ]
})
export class AppComponent {
  title = 'app';
}
