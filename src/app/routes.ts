import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => import('./modulos/modulos.module').then(m => m.ModulosModule) },
            { path: 'cadastro', loadChildren: () => import('./cadastros/cadastros.module').then(m => m.CadastrosModule) }
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
