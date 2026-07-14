import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FTTHComponent } from './pages/ftth/ftth';

export const routes: Routes = [{
    path:'',
    redirectTo: 'ftth',
    pathMatch: 'full'
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'ftth',
    component: FTTHComponent
},
{
    path: 'pstn',
    component: FTTHComponent
},
{
    path: 'volt',
    component: FTTHComponent
},
{
    path: 'vobb',
    component: FTTHComponent
},
{
    path: 'ip-endpoint',
    component: FTTHComponent
},
{
    path: 'change-ont',
    component: FTTHComponent
},
{
    path: 'home',
    redirectTo: ''
},
];
