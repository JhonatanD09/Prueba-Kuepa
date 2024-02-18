import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  URL = 'api/'

  constructor(private http : HttpClient) { 
  }

  login(user:string, passwor:string){
    return this.http.post(`api/auth/login`,{"userName":user,"password":passwor})
  }
}
