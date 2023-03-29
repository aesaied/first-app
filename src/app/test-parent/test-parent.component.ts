import { Component } from '@angular/core';
import { LoggerService } from '../Services/logger.service';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css'],
  providers: [LoggerService]

})
export class TestParentComponent {



  constructor(private logger: LoggerService) {


    logger.error('Called from  partent component!');

  }

  myDisplayName: string = 'Test Input Binding';



  OnNameChanged(value: string) {
    this.myDisplayName = value;


    this.logger.info(`Value  changed :${value}`)
  }

}
