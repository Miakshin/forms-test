import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormArray }   from '@angular/forms';

import { FormTemplate } from './FormTemplate'

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent implements OnInit {

  formTemplate: FormTemplate;

  constructor() {
    this.formTemplate = {
      title: "New form",
      description: "",
      questions: [
        {
        title: "question without title",
        type: "string",
        variables: [""]
        }
      ]
    }
  }

  ngOnInit() {
  }
  addQuestion(){
    const question = {
     title: "new form",
     type : "string",
     variables:[""]
   }
   this.formTemplate["questions"].push(question);
  }
  saveForm(){
    console.log(this.formTemplate)
  }

}
