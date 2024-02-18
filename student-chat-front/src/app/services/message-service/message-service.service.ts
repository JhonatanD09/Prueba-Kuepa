import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private http : HttpClient) { }

  saveMessage(message : any){
    return this.http.post('api/messages/add',message)
  }
}
