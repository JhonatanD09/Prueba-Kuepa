import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import SockJs from 'sockjs-client'
import { Message } from '../../models/Message';
import {io} from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

 socket:any

 constructor(){

  this.socket = io('http://localhost:3000');
 }

 listen(eventName: string){
  return new Observable((suscriber)=>{
    this.socket.on(eventName,(data:any)=>{
      suscriber.next(data)
    })
  })
 }

 emit(eventName: string, data : any){
  this.socket.emit(eventName,data)
 }

}
