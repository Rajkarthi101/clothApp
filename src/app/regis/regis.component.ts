import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

interface country {
  value: string;
}

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})


export class RegisComponent implements OnInit {

  //Country Details
  countrys: country[] = [
    { value: 'India' },
    { value: 'USA' },
    { value: 'United Kingdom' },
    { value: 'Germany' },
    { value: 'Japan' },
    { value: 'Canada' },
    { value: 'Switzerland' },
    { value: 'New Zealand' },
    { value: 'Australia' },
  ];

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService,private router:Router) { }

  registrationForm!: FormGroup
  registerData: any;
  tokenName:string="";

  dataObject: any;

  //[7-9]{1}[0-9]{9}
  mobnumPattern = "[7-9]{1}[0-9]{9}";

  ngOnInit(): void {

    this.registrationForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),//,Validators.pattern('[a-zA-Z0-9][@gmail.com]')
      email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9\.]+@gmail.com')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#$\-_?.:]{8,}')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]),
      country: new FormControl('', [Validators.required])
    })
  }

  get f() {

    return this.registrationForm.controls;
  }

  handleSubmit() {
    
    alert("RAJKARTHI THE LAGENT " + this.registrationForm.get('name')?.value);
    console.log(this.registrationForm.value)
    alert(this.registrationForm.value)

    this.dataObject = {
      userName: this.registrationForm.get('name')?.value,
      userEmail: this.registrationForm.get('email')?.value,
      userPassword: this.registrationForm.get('password')?.value,
      userPhNumber: this.registrationForm.get('phoneNumber')?.value,
      userCountry: this.registrationForm.get('country')?.value,
      jwtToken:this.tokenName
      
    }



    // new Observable<any>((subs)=>{
    //   //http.get()  -> when thi rerturns data , call
    //   setTimeout(() => {
    //     subs.next("hi");
    //   }, 10000);

    // }).subscribe((data)=>{console.log(data)},()=>{})

    this.registerService.saveUserDetails(this.dataObject).subscribe({
      "next": (data) => {
        console.log(data);
        this.registerData = data;
        this.router.navigate(['/login']);
      },
      "error": (error) => { console.log(error); }

    });


  }



}
