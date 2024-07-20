import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { usersService } from '../service/users.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-logo-ipsum-copia',
  templateUrl: './logo-ipsum.component.html',
  styleUrl: './logo-ipsum.component.scss'
})
export class LogoIpsumCopiaComponent implements AfterViewInit {

  constructor( private _service: usersService) {}




  email = new FormControl('', {validators: [Validators.required, Validators.email,], updateOn: 'blur'});
  password = new FormControl('', {validators: [Validators.minLength(7), Validators.required]});

  send() {
    throw new Error('Method not implemented.');
  }


/*
    send() {
      if(this._service.senhaCorreta(this.email, this.password)) {
        console.log('passou')
      } else {
        console.log('não passou')
      }

    }

*/



  ngAfterViewInit() {
  }

}

