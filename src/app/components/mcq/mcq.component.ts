//https://dotnettutorials.net/lesson/radio-buttons-in-angular-template-driven-forms/
import { Component, OnInit } from '@angular/core';
import { McqService } from '../../services/mcq.service';
import { Questions,Options,mcqquestion } from '../../models/questions';
import { FormBuilder,FormGroup,FormControl,FormArray,ValidatorFn } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css'] 
})
export class McqComponent implements OnInit {
  qlist: mcqquestion[];
  topic:string = '';
  selectedtopic:mcqquestion[];
  selectedquestions:Questions[];
  mcqForm:NgForm;
  defaulttopic:string;
  
  constructor(private questions:McqService) {}
 
 ngOnInit(): void {
  this.qlist=this.questions.getQuestions(); 
  this.defaulttopic =this.qlist[0].topic;
  this.getMCQHeader(this.defaulttopic);
}

  saveForm(mcqForm: NgForm){
    console.log("Save form");
    console.log(mcqForm.value);
    
  }

  getMCQDetails(event){
    console.log("GetMCQDetails");
    this.topic = event.target.value;
    console.log(this.topic);
    this.getMCQHeader(this.topic);  
  }


  getMCQHeader(selectedtopic:string){
    this.selectedtopic =this.qlist.filter(function(data){
            return data.topic==selectedtopic;
    })
    console.log("selected topic "+JSON.stringify(this.selectedtopic));
    this.selectedquestions=this.selectedtopic[0].questions;
    console.log("selected questions "+this.selectedquestions);
  }
}