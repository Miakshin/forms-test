import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { FormService } from '../form.service';
import { FormTemplate } from '../create-form/FormTemplate'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forms: FormTemplate[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private formService : FormService) { }

  ngOnInit():void {
    this.formService.forms
      .subscribe(forms => {
        this.forms = forms;
      })
  }

  ngOnDestroy():void{
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
