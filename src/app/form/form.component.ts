import { Component, OnInit } from '@angular/core';
import { FormTemplate } from '../create-form/FormTemplate';
import { FormService } from '../form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormTemplate;

  constructor(private formService : FormService,
              private router: ActivatedRoute) { }

  ngOnInit():void {
    this.getFormData()
  }

  getFormData():void{
    let id: number =+ this.router.snapshot.paramMap.get('id');
    this.form = this.formService.getFormById(id)
  }

}
