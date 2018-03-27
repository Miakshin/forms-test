import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form-cell',
  templateUrl: './create-form-cell.component.html',
  styleUrls: ['./create-form-cell.component.css']
})

export class CreateFormCellComponent {

  type: string;
  title: string;

  constructor() {
    this.type = "string";
  }

  onHendleType(ev){
    console.log(this.type);
    this.type = ev.target.value;
  }
  addDDI(ev){
    let input = document.createElement("input");
    input.className = "drop-down-items__input";
    console.log(ev.target.parentNode)
    ev.target.parentNode.insertBefore(input,ev.target)
  }

}
