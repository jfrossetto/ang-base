import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', redirectTo: 'usuarios', pathMatch: 'full' ,
    children: [
      { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    UsuariosModule,    
    RouterModule.forChild(routes)
  ]
})
export class CadastrosModule { }
