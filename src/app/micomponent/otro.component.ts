import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otro',
  template: `
    <article><ng-content></ng-content></article>
  `,
  styles: [`{
    article {
      border: 1px black;
    }
  }`]
})
export class OtroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
