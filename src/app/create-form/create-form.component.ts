import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators }   from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  questions : any;
  createFormGroup : FormGroup;

  constructor() {
    this.questions = [
      {title: "new form",
       type : "string",
       answerVariables:[]}
    ]
    this.createFormGroup = new FormGroup({
    "form-title": new FormControl("", [
      Validators.required,
      Validators.pattern("[^{}*<>]{2,55}")
    ]),
    "description": new FormControl("",[
      Validators.required,
      Validators.pattern("^[0-9]{1,12}")
    ]),
    "currency-0": new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }
  addQuestion(){
    const question = {
     title: "new form",
     type : "string",
     answerVariables:[]
   }
   this.questions.push(question)
  }
}
