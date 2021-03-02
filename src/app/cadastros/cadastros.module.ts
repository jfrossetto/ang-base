import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '',  component: CadastroComponent }
];


@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CadastrosModule { }
