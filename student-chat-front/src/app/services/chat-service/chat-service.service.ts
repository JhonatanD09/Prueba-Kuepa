import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

 socket:any
 io = io('http://localhost:3000',{
   withCredentials: true,
   autoConnect: true
 });

 constructor(){
 }

}
