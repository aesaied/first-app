import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }


  private countryList!: Country[];


  getAll(): Country[] {

    if (this.countryList == null) {


      this.countryList = [{ id: "PS", name: 'Palestine' }, { id: "JO", name: 'Jordan' }];

    }


    return this.countryList;

  }


}
