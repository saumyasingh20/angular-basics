import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  validationMessage: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  UserRegistration(frmValues:NgForm){
    if(!frmValues.valid){
      console.log('invalid');
      return;
    }

    // validations:
    if (frmValues.controls.firstname.value.length <= 2) {
      this.validationMessage = "First name should have at least 2 characters";
      return;
    }
    if (frmValues.controls.lastname.value.length <= 5) {
      this.validationMessage = "Last name should have at least 3 characters";
      return;
    }
    
   
    console.log('First Name: ' + frmValues.controls.firstname.value);
    console.log('Last Name: ' + frmValues.controls.lastname.value);
    console.log('Email: ' + frmValues.controls.email.value);

    frmValues.reset();

   
  }

}
