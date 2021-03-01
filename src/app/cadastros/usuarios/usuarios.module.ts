import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioContainerComponent } from './usuario-container/usuario-container.component';
import { UsuarioCrudComponent } from './usuario-crud/usuario-crud.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { 
     path: '', component: UsuarioContainerComponent
  }
];

@NgModule({
  declarations: [UsuarioContainerComponent, UsuarioCrudComponent, UsuarioListComponent, UsuarioEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsuariosModule { }
