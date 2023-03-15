import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-box2',
  templateUrl: './my-box2.component.html',
  styleUrls: ['./my-box2.component.css']
})
export class MyBox2Component {


  @Input('customtitle') title!: string;
  @Input() subTitle!: string;
  @Output() notify = new EventEmitter<string>();



  notifyClicked(value: string) {

    this.notify.emit(value);
  }


}
