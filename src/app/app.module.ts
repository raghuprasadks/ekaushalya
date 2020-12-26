import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegistrationService} from './services/registration.service';
import { HttpClientModule } from '@angular/common/http';
import { McqComponent } from './components/mcq/mcq.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    McqComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    LandingComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
