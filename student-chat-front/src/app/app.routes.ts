import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentChatComponent } from './components/student-chat/student-chat.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

export const routes: Routes = [
    {
        path : '',
        component : LoginComponent
    },
    {
        path : 'chat', 
        component : StudentChatComponent
    },
    {
        path : 'create', 
        component : CreateUserComponent
    },
];
