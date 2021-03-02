import { Component, OnInit } from '@angular/core';
import { LayoutStoreService } from '../../../stores/layout-store.service'

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {

  constructor(public layoutStore: LayoutStoreService) { }

  ngOnInit(): void {
  }

  voltarParaLista() {
    this.layoutStore.crudModoLista();
  }

}
