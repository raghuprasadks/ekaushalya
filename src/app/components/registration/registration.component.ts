import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms'
//import { RegistrationService} from '../../services/registration.service';
//import {Registration} from '../../../../model/registration';
//import {NgForm} from '@angular/forms';

import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  msgServer={};
  isError=false; 
  isSubmitted = false; 
  constructor(private fb: FormBuilder,private regService:RegistrationService) { }
  userForm = this.fb.group({
    name: [''],
	  email: [''],
	  mobile:[''],
	  password:[''],
	  confirmpassword:['']

  });
 
  ngOnInit(): void { 
  }

  
  onSubmit(){
    this.isSubmitted = true;
    console.warn(this.userForm.value);
    this.regService.savePost(this.userForm.value)
    .subscribe(
      data=>{
        console.log("type :: "+data);

        console.log(JSON.stringify(data));
        this.msgServer=data;
        console.log("Name from server "+this.msgServer["name"]);
        //this.reset();      
      },
    err=>{
      this.msgServer=err;
      this.isError=true;
      console.log("Error occured")
    }
    ); 
  }
  
  reset(){
    this.userForm["name"].value=' ';
  }

  
}
