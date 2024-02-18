import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  name :string = ''
  userName :string = ''
  type : string = ''
  password :string = ''
  userInvalid: boolean = false


  constructor(
    private router :Router,
    private userService : UserService
    ) {
    }



    onSelected(rol:string){
      this.type = rol
    }

  create() {
    console.log(this.type)
    this.userService.createUser(this.userName,this.name,this.type,this.password).subscribe(
      {
        next:(res)=>{
          this.router.navigateByUrl('')
          console.log(res)
        },
        error: (err) =>{
          this.userInvalid = true
          alert(this.userInvalid)
          console.log(err)
        }
      }
    )
  }
}
