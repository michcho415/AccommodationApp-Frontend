import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CredentialService } from './services/credential-service/credential.service';
import { Login } from './data/Login/Login'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
      private formBuilder: FormBuilder,
      private credentialService: CredentialService
    ) {

  }

  isError = false;
  errorText = '';

  form = this.formBuilder.group({
      login:'',
      password:''
  });

  OnSubmit(): void {
    console.log("Login")
    this.credentialService.login(
      {
        login: this.form.value.login!,
        password: this.form.value.password!
      }
    ).subscribe({
      next: next => {

      },
      error: err => {
        this.isError = true;
        console.log(err);
        if(err.status == 0) {
          this.errorText = 'Cannot connect to server!'
        }
        if(err.status == 422) {
          this.errorText = 'Please provide appropriate credentials!'
        }
        
      }
    });
  }

  register(){
    console.log("Register");
  }
}
