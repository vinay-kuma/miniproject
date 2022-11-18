import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import validateForm from 'src/app/helpers/Validateform';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  type: string = "Password";
  isText: boolean =false;
  eyeIcon: string = "fa-eye-slash"
  signUpForm!: FormGroup; 
  constructor(private fb : FormBuilder , private auth: AuthService, private router : Router ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      userName: ['',Validators.required],
      email: ['',Validators.required],
      Password: ['',Validators.required],
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = " text": this.type = "Password";
  }

  onSignup(){
  if(this.signUpForm.valid){
    this.auth.signUp(this.signUpForm.value)
    .subscribe({
      next:(res=>{
        alert(res.message);
         this.signUpForm.reset();   
         this.router.navigate(['login']);
      }),
      error:(err=>{
        alert(err?.error.message)
      })
    })
    console.log(this.signUpForm.value)
  }
  else{
    validateForm.validateAllFormFields(this.signUpForm)
  }
}
}
