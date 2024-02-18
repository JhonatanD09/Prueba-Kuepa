import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service/chat-service.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { MessageServiceService } from '../../services/message-service/message-service.service';
import { FormsModule } from '@angular/forms';
import MessageShow from '../../models/MessageShow';

@Component({
  selector: 'app-student-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-chat.component.html',
  styleUrl: './student-chat.component.css'
})
export class StudentChatComponent implements OnInit{

  messageInput : string = ''
  user:any
  list : MessageShow[] = [] 
  id = 0
  constructor(
    private chatService : ChatServiceService,
    private localStorage : LocalStorageService,
    private messageService : MessageServiceService){

  }

  ngOnInit(): void {
    this.user = this.localStorage.getUser()
    this.recibenMessages()
  }

  sendMessage(){
    
    if(this.messageInput==''){
      
    }else{
      this.list.push(this.createMessage(true))
      this.saveMessage();
      this.chatService.io.emit('recept',this.createMessage(false))
      this.messageInput = ''
    }


    
  }

  private saveMessage() {
    this.messageService.saveMessage({ message: this.messageInput, userName: this.user.userName }).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private recibenMessages() {

    this.chatService.io.on('send', (res)=>{
      const { message, userName, rol, hour, userActual } = res;
      this.list.push({
        id: this.id,
        message: message,
        userName: userName,
        rol: rol,
        hour: hour,
        userActual: userActual
      });
    })
    
  }

  createMessage(actualUser : boolean){
    const currentTime = new Date()
    return {
      id: this.id,
      message : this.messageInput,
      userName : this.user.userName,
      rol : this.user.rol,
      hour: `${currentTime.getHours()}:${currentTime.getMinutes()}`,
      userActual : actualUser}
  }

}
