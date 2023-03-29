import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent {


  @Input() displayName!: string;

  @Output() displayNameChange = new EventEmitter<string>();


  change(newDisplayName: string) {

    this.displayNameChange.emit(newDisplayName);
  }



}
