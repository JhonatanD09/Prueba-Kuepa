import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveData(data:any){
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.user);
  }
}
