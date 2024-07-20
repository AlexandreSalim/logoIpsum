import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'  
})

export class usersService {
    private users = [
        {email: 'aqui@gmail.com', senha:'1234567'},
        {email: 'ali@gmail.com', senha:'12345678'},
        {email: 'dali@gmail.com', senha:'123456789'},
    ]

    senhaCorreta(email: string, password: string){
        return this.users.some(users => users.email === email && users.senha === password);
    }
}
