import { Routes } from '@angular/router';
import { Login } from './_pages/login/login';
import { MainInvitation } from './_pages/main-invitation/main-invitation';
import { InvitationMenu } from './_pages/invitation-menu/invitation-menu';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'main/:id',
    component: MainInvitation,
  },
  {
    path: 'main/:id/menu',
    component: InvitationMenu,
  },
  {
    path: '**',
    component: Login,
  },
];
