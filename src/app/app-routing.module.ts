import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoIpsumComponent } from './logo-ipsum/logo-ipsum.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { SiteComponent } from './site/site.component';

const routes: Routes = [
  { path: '', component: LogoIpsumComponent },
  { path:  'forgot-password', component: ForgotPasswordComponent },
  { path: 'criar-conta', component: CriarContaComponent },
  { path: 'site', component: SiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }