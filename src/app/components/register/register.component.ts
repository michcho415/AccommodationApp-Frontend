import { Component } from '@angular/core';
import { CredentialService } from 'src/app/services/credential-service/credential.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private credentialService: CredentialService,
     private formBuilder: FormBuilder) {

  }

  isError: boolean = false;
  errorText: string =  '';

  form = this.formBuilder.group(
    {
      login:'',
      password:'',
      confirmPassword:'',
      email:'',
      phone:''
    }
  )

  OnSubmit(): void {
    this.isError = false;
    
    if(this.validateForm())
      return;

    this.credentialService.registerUser(
      {
        username: this.form.value.login!,
        password: this.form.value.password!,
        emailAddress: this.form.value.email!,
        phone: this.form.value.phone ?? ''
      }
    )
    .subscribe(
      {
        next: next => {
          //inform that user has been registered
          //navigate to login
        },
        error: err => {
          this.isError = true;
        }
      }
    )
  }

  validateForm(): boolean {
    this.isError = false;
    if(this.form.value.login == null || this.form.value.login === "") {
      this.isError = true;
      this.errorText = "Login is required!";  
      return this.isError;
    }
    if(this.form.value.password == null ||
       this.form.value.password === "" ||
       this.form.value.confirmPassword == null ||
       this.form.value.confirmPassword === "" ) {
        this.isError = true;
        this.errorText = "Password is required!";
        return this.isError;
       }
    if(this.form.value.password !== this.form.value.confirmPassword) {
      this.isError = true;
      this.errorText = "Passwords are not matching!";
      return this.isError;
    }
    return this.isError;
  }
  
}
