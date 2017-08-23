import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  app = {
    lista: 'Listado'
  };

  productos: Array<string> = ['producto1', 'producto2', 'producto3'];
}
