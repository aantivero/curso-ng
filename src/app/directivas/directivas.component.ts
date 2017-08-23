import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  private switch = true;
    private items = [1, 2, 3, 4, 5];
    private value = 10;
    onSwitch() {
        this.switch = !this.switch;
    }

}
