import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private http : HttpClient) { }

  saveMessage(message : Message){
    return this.http.post('',message)
  }
}
