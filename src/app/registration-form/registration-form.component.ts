import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  first_name: String = ''
  last_name: String=''
  mail: String = ''
  psw: String = ''
  con_password: String = ''


  signUpForm= new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    confirm_psw: new FormControl('',[Validators.required])
  })


  get firstname(){
    return this.signUpForm.get('firstname')
  }

  get lastname(){
    return this.signUpForm.get('lastname')
  }

  get email(){
    return this.signUpForm.get('email')
  }

  get password(){
    return this.signUpForm.get('password')
  }

  get confirm_psw(){
    return this.signUpForm.get('confirm_psw')
  }




}
