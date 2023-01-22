import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Constants } from '../../data/app-constants';
import { Observable } from 'rxjs';
import { Login } from '../../data/Login/Login';
import { RegisterUser } from 'src/app/data/Register/RegisterUser';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  private readonly constants: Constants = new Constants();

  constructor(private http:HttpClient) { }

  login(loginData: Login) /**:Observable<?> */ {
    var response =  this.http.post(
      this.constants.apiUrl + '/Users/authenticate',
      loginData
    );
    return response;
  }

  registerUser(userData: RegisterUser) {
    return this.http.post(
      this.constants.apiUrl + '/Users',
      userData
    )
  }

}
