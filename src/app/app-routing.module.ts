import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from '../app/components/navbar/navbar.component';
import {LandingComponent} from '../app/components/landing/landing.component';
import {RegistrationComponent} from '../app/components/registration/registration.component';
import {LoginComponent} from '../app/components/login/login.component';
import {HomeComponent} from '../app/components/home/home.component';

const routes: Routes = [
  
    {path:'',component:LandingComponent},
    {path:'register',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
