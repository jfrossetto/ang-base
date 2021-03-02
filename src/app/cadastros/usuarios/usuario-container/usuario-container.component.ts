import { Component, OnInit } from '@angular/core';
import { LayoutStoreService } from '../../../stores/layout-store.service'

@Component({
  selector: 'app-usuario-container',
  templateUrl: './usuario-container.component.html',
  styleUrls: ['./usuario-container.component.scss']
})
export class UsuarioContainerComponent implements OnInit {

  constructor(public layoutStore: LayoutStoreService) { }

  ngOnInit(): void {
    this.layoutStore.crudModoLista();
  }

}
