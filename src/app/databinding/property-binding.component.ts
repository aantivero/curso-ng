import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    {{resultado}}
  `
})
export class PropertyBindingComponent  {

@Input() resultado;

}
