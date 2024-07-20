import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { usersService } from '../service/users.service';

@Component({
  selector: 'app-logo-ipsum',
  templateUrl: './logo-ipsum.component.html',
  styleUrl: './logo-ipsum.component.scss'
})
export class LogoIpsumComponent { 

  email = '';
  password = '';
  passwordFieldType: string = 'password';
  ReTypePasswordvisible: string = 'password';

  @ViewChild('buttonlogin') buttonlogin!: ElementRef<HTMLInputElement>;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @ViewChild('input2') input2!: ElementRef<HTMLInputElement>;
  @ViewChild('div') divEl!: ElementRef<HTMLDivElement>;
  @ViewChild('meuForm') meuform!: NgForm;

  constructor( private _router: Router, private _usersService: usersService) { }
 
  forgotPassword(){
    this._router.navigate(['/forgot-password']);
  }

  criarConta(){
    this._router.navigate(['/criar-conta']);
  }

  send() {
    if(this._usersService.senhaCorreta(this.email, this.password)) {

     this._router.navigate(['/site']);
    
    } else {

      this.divEl.nativeElement.textContent ='email or password is incorrect';
      this.divEl.nativeElement.classList.add('error');
      this.divEl.nativeElement.classList.remove('acerto');


      this.buttonlogin.nativeElement.style.margin = '20px 0 0 0';

      this.input.nativeElement.style.borderColor = 'red';
      this.input2.nativeElement.style.borderColor = 'red';
      this.buttonlogin.nativeElement.style.margin = '0'; 

      //console.log(this.meuform.value)
    }

  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
   // console.log(this.ReTypePasswordvisible);
  }

  togglePasswordVisibility2() {
    this.ReTypePasswordvisible = this.ReTypePasswordvisible === 'password' ? 'text' : 'password';
  }

 



}

