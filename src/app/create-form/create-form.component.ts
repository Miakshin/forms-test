import { Component} from '@angular/core';
import {  FormGroup }   from '@angular/forms';

import { FormTemplate } from './FormTemplate'

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent {

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

  addQuestion(){
    const question = {
     title: "question without title",
     type : "string",
     variables:[""]
   }
   this.formTemplate["questions"].push(question);
  }
  addDropDownItem(i){
    this.formTemplate.questions[i].variables.push(" ")
  }
  saveForm(){
    console.log(this.formTemplate)
  }
  onChangeQuestin(event,item,i){
    this.formTemplate.questions[item].variables[i] = event.target.value;
  }
  onQuestinDelete(item,i){
    this.formTemplate.questions[item].variables.splice(i,1)
  }
  onCellDelete(item){
    this.formTemplate.questions.splice(item,1)
  }

}
