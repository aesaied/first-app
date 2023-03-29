import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from '../models/country';
import { Employee } from '../models/employee';
import { CountryService } from '../Services/country.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {


  @ViewChild('createEmpForm') createEmpForm!: NgForm;
  countryList!: Country[];


  employee!: Employee;
  constructor(private countryService: CountryService) {

    this.countryList = countryService.getAll();


    this.employee = { firstname: "Atallah", lastname: "Esaied", address: { city: '', pincode: '', street: '' }, country: "PS", email: 'atallah.esaied@gmail.com', gender: "male", isMarried: false };
  }



  onSumbit(form: NgForm) {


    var val = form.value;
  }


  ResetForm(): void {
    this.createEmpForm.resetForm();
  }

}
