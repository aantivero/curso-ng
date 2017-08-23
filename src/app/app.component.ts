import { Component } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

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
