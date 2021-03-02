import { Component, OnInit } from '@angular/core';
import { LayoutStoreService } from '../../../stores/layout-store.service'

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  constructor(public layoutStore: LayoutStoreService) { }

  ngOnInit(): void {
  }

  irParaEdit() : void {
    this.layoutStore.crudModoEdit();
  }
}
