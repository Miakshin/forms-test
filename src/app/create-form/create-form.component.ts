import { Component, Input, AfterContentChecked} from '@angular/core';
import { FormGroup,  NgModel}   from '@angular/forms';
import { Router } from '@angular/router';

import { FormTemplate } from './FormTemplate';
import { FormService } from '../form.service';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent implements AfterContentChecked{

  formTemplate: FormTemplate;
  isFormInvalid: boolean;

  constructor(private formService : FormService,
              private router: Router) {
    this.formTemplate = {
      id: Date.now(),
      title: "New form",
      description: "",
      questions: [
        {
        title: "Question",
        type: "string",
        variables: [""]
        }
      ]
    }
  }

  addQuestion():void {
    const question = {
     title: "Question",
     type : "string",
     variables:[""]
   }
   this.formTemplate["questions"].push(question);
  }

  addDropDownItem(i:number):void{
    this.formTemplate.questions[i].variables.push(" ");
  }

  saveForm():void{
    this.formService.addForm(this.formTemplate);
    this.router.navigate(["/home"])
  }

  onChangeQuestin(event:any, item:number, i:number):void{
    this.formTemplate.questions[item].variables[i] = event.target.value;
  }

  onQuestinDelete(item:number, i:number):void{
    this.formTemplate.questions[item].variables.splice(i,1)
  }

  onCellDelete(item:number):void{
    this.formTemplate.questions.splice(item,1)
  }

  lengthValidation():void{
    let elemtntsValidations = []
    for(let i=0; i<document.querySelectorAll("input[type='text']").length; i++){
      elemtntsValidations.push((eval(`document.querySelectorAll("input[type='text']")[i].value.length < 3`)))
    }
    elemtntsValidations.indexOf(true)=== -1 ? this.isFormInvalid = false : this.isFormInvalid = true
  }

  ngAfterContentChecked():void{
    this.lengthValidation();
  }

}
