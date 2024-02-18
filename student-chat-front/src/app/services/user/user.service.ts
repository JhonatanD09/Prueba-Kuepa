import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  createUser(userName:string,name:string,rol:string,password:string){
    return this.http.post('api/users/create',
    {"userName": userName,
    "name":name,
    "rol":rol,
    "password": password});
  }
}
