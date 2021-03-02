import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
  styleUrls: ['./usuario-crud.component.scss']
})
export class UsuarioCrudComponent implements OnInit {
  
  @Input()  layoutState : String;

  constructor() { }

  ngOnInit(): void {
    console.log(this.layoutState);
  }

}
