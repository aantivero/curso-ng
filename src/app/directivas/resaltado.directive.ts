import { Directive } from '@angular/core';
import { ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input() defaultColor = 'white';
  //@Input('highlight') highlightColor = 'green';

    private backgroundColor: string;
    constructor(private elementRef: ElementRef, private renderer: Renderer) {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
    }

}
