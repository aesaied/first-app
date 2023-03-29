import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {

    console.log('Logger  created ---');


  }


  error(msg: string) {
    console.error(msg);
  }

  log(msg: string) {
    console.log(msg);
  }

  info(msg: string) {
    console.info(msg);
  }
}
