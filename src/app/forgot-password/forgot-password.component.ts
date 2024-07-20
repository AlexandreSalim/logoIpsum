import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usersService } from '../service/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  constructor(private renderer: Renderer2, private el: ElementRef, private _userService: usersService) { }
  
  @ViewChild('meuForm') meuform!: NgForm;
  @ViewChild('reset1') reset1!: ElementRef<HTMLDivElement>;
  @ViewChild('divDois') divDois!: ElementRef<HTMLDivElement>;
  
   

  email = 'aqui@gmail.com';
  senha = '1234567';
  checkboxCreated: boolean = false;
  checkboxElement: any = null;

  reset(resetId: string){
    let reset = this.el.nativeElement.querySelector(`#${resetId}`);
    let reset__interno = this.el.nativeElement.querySelector('.reset__interno');
    let auxiliar = this.el.nativeElement.querySelector('.auxiliar');

      if (this.checkboxCreated) {
        if (this.checkboxElement && this.checkboxElement.parentNode) {
          this.checkboxElement.parentNode.removeChild(this.checkboxElement);

          let reset1 = reset__interno.parentNode;
          reset1.classList.remove('border');

          let reset2 = auxiliar.parentNode;
          reset2.classList.remove('border');
        }
        this.checkboxCreated = false;
      }

      const input = this.renderer.createElement('input');
      this.renderer.setAttribute(input, 'type', 'checkbox')
      this.renderer.setAttribute(input, 'checked', 'true')
      this.renderer.addClass(input, 'reset__checkbox');
      this.renderer.appendChild(reset, input);

      this.renderer.addClass(reset, 'border');

      this.checkboxCreated = true;
      this.checkboxElement = input;
    
  }

  send() {

    console.log(this.meuform.value);
    console.log(this.checkboxCreated);
  }

}
