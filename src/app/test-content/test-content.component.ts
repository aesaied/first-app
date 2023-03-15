import { Component } from '@angular/core';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent {


  values!: string[];

  constructor() {
    this.values = new Array<string>();
  }


  onNotify(value: string) {

    this.values.push(value);
  }

}
