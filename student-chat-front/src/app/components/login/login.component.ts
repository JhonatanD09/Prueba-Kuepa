import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClientModule} from '@angular/common/http';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  providers : [HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  userName: string = '';
  password: string = '';
  userFound: boolean = false
  result = ''

  ngOnInit(): void {
    this.localStorage.deleteData()
  }

  constructor(
    private router :Router,
    private authService : AuthService,
    private localStorage :LocalStorageService
    ) {}

  login() {
    console.log(this.userName)
    this.authService.login(this.userName, this.password).subscribe({
      next:(res)=>{
        console.log(res)
        this.localStorage.saveData(res)
        this.router.navigateByUrl('chat')
      },
      error: (err) =>{
        this.userFound = true
        this.result = err.error.error
      }
    })
    // this.router.navigateByUrl('chat')
  }

  close(){
    this.userFound = false
  }
}
