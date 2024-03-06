import { Routes } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { HomeComponent } from './paginas/home/home.component';

export const routes: Routes = [
    {
        path: 'formulario',
        component: FormularioComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
