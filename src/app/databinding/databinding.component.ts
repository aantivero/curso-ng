import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  aplicacion: string = 'Mi aplicacion';
  valorInicial: string = 'Mi valor inicial';
  name = 'ok';

  persona = {
    nombre: 'Ale',
    edad: 38
  };

  constructor() { }

  onTest(): boolean {
    return true;
  }

  ngOnInit() {
  }

  onClicked(value: string) {
    alert(value);
  }

  algodeafuera(valor: string) {
    console.log(valor);
    alert(valor);
  }

}
