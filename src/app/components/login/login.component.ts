import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CredentialService } from '../../services/credential-service/credential.service';
import { Login } from '../../data/Login/Login'
import { Router } from '@angular/router';
import { LoggedUser } from 'src/app/data/logged-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private credentialService: CredentialService,
    private router: Router
  ) { }

  isError = false;
  errorText = '';

  form = this.formBuilder.group({
    login:'',
    password:''
  });

  OnSubmit(): void {
    this.credentialService.login(
      {
        login: this.form.value.login!,
        password: this.form.value.password!
      }
    ).subscribe({
      next: (response) => {
        this.isError = false;
        console.log(response);
        LoggedUser.username = this.form.value.login!;
        //TO DO:
        //LoggedUser.token = response.token;
        //LoggedUser.isAdmin = response.isAdmin;
        //LoggedUser.isLandlord = response.isLandlord;
        //this.router.navigate(['/ApartmentsList'])
      },
      error: (error) => {
        this.isError = true;
        console.log(error);
        if(error.status == 0) {
          this.errorText = 'Cannot connect to server!'
        }
        if(error.status == 422 || error.status == 400) {
          this.errorText = 'Please provide appropriate credentials!'
        }
      }
    });
  }


  register(){
    this.router.navigate(['/register']);
  }

}
