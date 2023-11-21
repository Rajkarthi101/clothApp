import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private formBuilder:FormBuilder, private registerService: RegisterService,private router : Router){}

  loginForm!:FormGroup
  loginData:any;
  registerLink:boolean=false;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9\.]+@gmail.com')]),
      userPassword:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#$\-_?.:]{8,}')]),
    })  
  }

  get f(){
    return this.loginForm.controls;
  }
  
  handleSubmit(){
    this.registerService.checkLogin(this.loginForm.get('userEmail')?.value,this.loginForm.get('userPassword')?.value).subscribe({
      "next": (data) => {
        console.log(data);
        this.loginData = data;
        if(this.loginData != null && this.loginData != ''){
          this.registerLink=false;
          this.router.navigate(['/categories']);
        }else if(this.loginData == null){
          this.registerLink=true;
        }
      },
      "error": (error) => { console.log(error); }
    });
  }

  register(){
    this.registerLink=false;
  }

}
