import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  aplicacion: string = 'Mi aplicacion';
  valorInicial: string = 'Mi valor inicial';

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
