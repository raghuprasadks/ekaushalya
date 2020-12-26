import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {RegistrationService} from '../../services/registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  msgServer:string;
  isError:boolean;  
  constructor(private formBuilder:FormBuilder,private regService:RegistrationService,private router:Router) { }

  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']

    });
  }

  
  signIn(){
    this.isError=false;
    console.log("Form Data ",this.loginForm.value);
    this.regService.login(this.loginForm.value)
    .subscribe(
      data=>{
        if(data.name==null)
        {       
          console.log("wrong credentials ");
          this.isError=true;
          this.loginForm.reset();
          console.log("Error occured")
        }
        else{
          console.log("login successful");
        console.log(JSON.stringify(data));
        this.msgServer=data;
        this.router.navigateByUrl('/home');
        //console.log("Name from server "+this.msgServer["name"]);
        //this.reset();
      }      
      },
    err=>{
      this.msgServer=err;
      this.isError=true;
      this.loginForm.reset();
      console.log("Error occured")
    }
    ); 
  }

}
