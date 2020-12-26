import { Injectable } from '@angular/core';
import { Questions,Options,mcqquestion} from '../models/questions';


@Injectable({
  providedIn: 'root'
})
export class McqService {

  mcqquestions:mcqquestion[]; 
  
  constructor() { 
   this.mcqquestions=[		
   {
     topic: "JavaScript",
     noofques:  5,
     mark:  5,
     duration: "5 mins",
     questions: [
       {
         qno: 1,
         question: "Inside which HTML element do we put the javaScript?",
         type: "single",
         options: {
           one: "<js>",
           two: "<javascript>",
           three: "<script>",
           four: "<scripting>"
          }
       },
       {
         qno: 2,
         question: "Inside which HTML element do we put the javaScript?",
         type: "multiple",
         options: {
           one: "<js>",
           two: "<javascript>",
           three: "<script>",
           four: "<scripting>"
         }
       }
     ]
   },
 
   {
     topic: "Java",
     noofques:  10,
     mark:  10,
     duration: "10 mins",
     questions: [{
         qno: 1,
         question: "What is java?",
         type: "single",
         options: {
           one: "<js>",
           two: "<javascript>",
           three: "<script>",
           four: "<scripting>"
         }
       }				
     ]
   }
   ]
 
 }
 getQuestions():mcqquestion[]{
   return this.mcqquestions;
 }
}
