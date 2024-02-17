import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service/chat-service.service';
import { Message } from '../../models/Message';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { MessageServiceService } from '../../services/message-service/message-service.service';

@Component({
  selector: 'app-student-chat',
  standalone: true,
  imports: [],
  templateUrl: './student-chat.component.html',
  styleUrl: './student-chat.component.css'
})
export class StudentChatComponent implements OnInit{

  user:any
  constructor(
    private chatService : ChatServiceService,
    private localStorage : LocalStorageService,
    private messageService : MessageServiceService){

  }

  ngOnInit(): void {
    this.user = this.localStorage.getUser()
    this.chatService.listen('server')
  }

  sendMessage(){
    const message : Message = {message: "Hola", userName: this.user.userName}
    this.chatService.emit('recept',message)
    this.messageService.saveMessage(message).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error: (err) =>{
        console.log(err)
      }
    })
    console.log('emitio')
    this.chatService.listen('send').subscribe((data)=>{
      console.log('aqui')
      console.log(data)
    })

  }

}
