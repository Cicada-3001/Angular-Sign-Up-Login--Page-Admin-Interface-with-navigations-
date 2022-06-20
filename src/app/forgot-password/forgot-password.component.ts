import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  mail: String = ''
  checker:Boolean= false
  
  submit =()=> {
      this.checker = true
  }

  forgotPswForm= new FormGroup({   
    email: new FormControl('',[Validators.required, Validators.email]),
    })
  
    get email(){
      return this.forgotPswForm.get('email')
    }
 
}
