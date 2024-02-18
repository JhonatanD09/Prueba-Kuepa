import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveData(data:any){
      localStorage.setItem('token', data.token);
      localStorage.setItem('userName', data.userName);
      localStorage.setItem('name', data.name);
      localStorage.setItem('rol', data.rol);
  }

  getUser(){
    return {userName: localStorage.getItem('userName'),
            name: localStorage.getItem('name'),
            rol : localStorage.getItem('rol')}
  }

  deleteData(){
    localStorage.clear()
  }
}
