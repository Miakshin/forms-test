import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FormTemplate } from './create-form/FormTemplate';
import { FORMS } from './mock-data';

@Injectable()

export class FormService {

  formsData: FormTemplate[] = FORMS;

  private formsSource = new BehaviorSubject< FormTemplate[]>(this.formsData);
  forms = this.formsSource.asObservable();

  constructor() { }

  updateUser(newData: FormTemplate[]){
    this.formsSource.next(newData);
  }

  getFormById(id:number){
    return this.formsData.find(form => form.id === id);
  }

  addForm (form: FormTemplate){
    let newFormsData = [...this.formsData, form]
    this.formsData = newFormsData;
    this.updateUser(this.formsData);
  }
}
