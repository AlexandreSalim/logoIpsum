import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoIpsumComponent } from './logo-ipsum/logo-ipsum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoIpsumCopiaComponent } from './copia/logo-ipsum.component';
import { SiteComponent } from './site/site.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoIpsumComponent,
    ForgotPasswordComponent,
    CriarContaComponent,
    LogoIpsumCopiaComponent,
    SiteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
