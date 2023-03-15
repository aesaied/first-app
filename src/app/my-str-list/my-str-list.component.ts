import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-str-list',
  templateUrl: './my-str-list.component.html',
  styleUrls: ['./my-str-list.component.css']
})
export class MyStrListComponent {


  @Input() myvalues!: string[];

}
