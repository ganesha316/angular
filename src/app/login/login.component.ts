import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {MustMatch} from '../confirmPassword';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;
  public registerForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    /* this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      c_password: new FormControl('')
    }); */
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
    });

    this.registerForm = this.fb.group({
      name: ['',[Validators.required,Validators.pattern(/^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/)]],
      phone: ['',[Validators.required,Validators.pattern(/^[1-9][0-9]{9}$/)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      c_password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
    },{
      validator: MustMatch('password', 'c_password')
    })

    
  }

  loginAction(val){
    console.log(val);
  }

  registerAction(val1) {
    console.log(val1);
  }

}
