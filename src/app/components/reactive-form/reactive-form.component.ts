import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  regUserForm:FormGroup|any;
  validationMessage: string = '';
  /**
   * Method 1 - inject formBuilder into the constructor
  constructor(formBuilder:FormBuilder) {

    this.regUserForm=formBuilder.group({
      firstName:[],
      lastName:[],
      emailId:[]
    })
   }
 */

   //Method 2 - using new FormBuilder
   /**
   constructor(){

   this.regUserForm = new FormBuilder().group({
    firstName: new FormControl('Mark'),
    lastName:  new FormControl(),
    emailId:  new FormControl(),
  })
}
 */

  constructor(formBuilder:FormBuilder) {
    this.regUserForm = new FormGroup({
      firstName: new FormControl('John', [Validators.required,
       Validators.maxLength(10)
      ]),
      lastName: new FormControl('Doe',Validators.required),
      emailId: new FormControl('johndoe@abc.in',[
        Validators.required,
        Validators.email
      ]),
    });
   }

  ngOnInit(): void {
  }
  UserRegistration(formValues:FormGroup){
    if(!formValues.valid){
      console.log('Form is invalid');
    }
    console.log(formValues.value);
    console.log('First Name - '+ formValues.controls.firstName.value);
    console.log('Last Name - '+ formValues.controls.lastName.value);
    console.log('Email - '+ formValues.controls.emailId.value);

    formValues.reset();
  }

}
