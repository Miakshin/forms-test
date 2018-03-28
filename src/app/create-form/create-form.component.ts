import { Component} from '@angular/core';
import {  FormGroup }   from '@angular/forms';
import { Router} from '@angular/router';

import { FormTemplate } from './FormTemplate';
import { FormService } from '../form.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent {

  formTemplate: FormTemplate;

  constructor(private formService : FormService,
              private router: Router) {
    this.formTemplate = {
      id: Date.now(),
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
    this.formService.addForm(this.formTemplate);
    this.router.navigate(["/home"])
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
