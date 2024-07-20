import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.scss'
})
export class CriarContaComponent {


  @ViewChild('div') divEl!: ElementRef<HTMLDivElement>;
  @ViewChild('meuForm') meuform!: NgForm;
  
  //inputs
  @ViewChild('buttonlogin') buttonlogin!: ElementRef<HTMLInputElement>;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @ViewChild('input2') input2!: ElementRef<HTMLInputElement>;
  @ViewChild('FirstName1') FirstNameEl!: ElementRef<HTMLInputElement>;
  @ViewChild('LastName1') LastNameEl!: ElementRef<HTMLInputElement>;
  @ViewChild('ReTypePassword1') ReTypePasswordEl!: ElementRef<HTMLInputElement>;



  passwordFieldType: string = 'password';
  ReTypePasswordvisible: string = 'password';

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    //console.log(this.ReTypePasswordvisible);
  }

  togglePasswordVisibility2() {
    this.ReTypePasswordvisible = this.ReTypePasswordvisible === 'password' ? 'text' : 'password';
  }

  
  send() {

    const Valid = this.meuform.value.email && this.meuform.value.FirstName && this.meuform.value.LastName 
    && this.meuform.value.password && this.meuform.value.ReTypePassword;

    const passwordValid = !this.meuform.value.password;
    const ReTypePasswordValid = !this.meuform.value.ReTypePassword;
    const emailValid = !this.meuform.value.email;
    const FirstNameValid = !this.meuform.value.FirstName;
    const LastNameValid = !this.meuform.value.LastName;

    if(Valid) {

      this.divEl.nativeElement.textContent ='Cadastrado';
      this.divEl.nativeElement.classList.add('acerto');
      this.divEl.nativeElement.classList.remove('error');


      this.FirstNameEl.nativeElement.style.borderColor = '#9994';
      this.LastNameEl.nativeElement.style.borderColor = '#9994';
      this.ReTypePasswordEl.nativeElement.style.borderColor = '#9994';


      this.input.nativeElement.style.borderColor = '#9994';
      this.input2.nativeElement.style.borderColor = '#9994';
      this.buttonlogin.nativeElement.style.margin = '0'; 

    } else {
      
      this.divEl.nativeElement.textContent ='*Todos os campos devem ser preenchidos';
      this.divEl.nativeElement.classList.add('error');
      this.divEl.nativeElement.classList.remove('acerto');

      this.buttonlogin.nativeElement.style.margin = '0';

      this.FirstNameEl.nativeElement.style.borderColor = 'red';
      this.LastNameEl.nativeElement.style.borderColor = 'red';
      this.ReTypePasswordEl.nativeElement.style.borderColor = 'red';

      this.input.nativeElement.style.borderColor = 'red';
      this.input2.nativeElement.style.borderColor = 'red';

    } 

    if(passwordValid) {
      this.input2.nativeElement.style.borderColor = 'red';
    } else {
      this.input2.nativeElement.style.borderColor = '#9994';
    }

    if(ReTypePasswordValid) {
      this.ReTypePasswordEl.nativeElement.style.borderColor = 'red';
    } else {
      this.ReTypePasswordEl.nativeElement.style.borderColor = '#9994';
    }

    if(emailValid) {
      this.input.nativeElement.style.borderColor = 'red';
    } else {
      this.input.nativeElement.style.borderColor = '#9994';
    }

    if(FirstNameValid) {
      this.FirstNameEl.nativeElement.style.borderColor = 'red';
    } else {
      this.FirstNameEl.nativeElement.style.borderColor = '#9994';
    }

    if(LastNameValid) {
      this.LastNameEl.nativeElement.style.borderColor = 'red';
    } else {
      this.LastNameEl.nativeElement.style.borderColor = '#9994';
    }

    if(Valid && this.meuform.value.password != this.meuform.value.ReTypePassword) {
      this.divEl.nativeElement.textContent ='*senha e confirmar senha estão diferentes';
      this.divEl.nativeElement.classList.add('error');
      this.divEl.nativeElement.classList.remove('acerto');

      this.input2.nativeElement.style.borderColor = 'red';
      this.ReTypePasswordEl.nativeElement.style.borderColor = 'red';
    }

    console.log('meuform value', this.meuform.value, this.meuform.valid)

  }


}

/*

      this.emailEl.nativeElement.classList.add('error');
      this.emailEl.nativeElement.classList.remove('acerto');

      this.FirstNameEl.nativeElement.classList.add('error');
      this.FirstNameEl.nativeElement.classList.remove('acerto');

      this.LastNameEl.nativeElement.classList.add('error');
      this.LastNameEl.nativeElement.classList.remove('acerto');


      this.passwordEl.nativeElement.classList.add('error');
      this.passwordEl.nativeElement.classList.remove('acerto');

      this.ReTypePasswordEl.nativeElement.classList.add('error');
      this.ReTypePasswordEl.nativeElement.classList.remove('acerto');
*/