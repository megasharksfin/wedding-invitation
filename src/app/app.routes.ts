import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./_pages/login/login').then(m => m.Login),
  },
  {
    path: 'main/:id',
    loadComponent: () => import('./_pages/main-invitation/main-invitation').then(m => m.MainInvitation),
  },
  {
    path: 'main/:id/menu',
    loadComponent: () => import('./_pages/invitation-menu/invitation-menu').then(m => m.InvitationMenu),
  },
  {
    path: 'main/:id/menu/our-story',
    loadComponent: () => import('./_pages/our-story/our-story').then(m => m.OurStory),
  },
  {
    path: 'main/:id/menu/details',
    loadComponent: () => import('./_pages/details/details').then(m => m.Details),
  },
  {
    path: 'main/:id/menu/maps',
    loadComponent: () => import('./_pages/maps/maps').then(m => m.Maps),
  },
  {
    path: 'main/:id/menu/maps/marcia-adams',
    loadComponent: () => import('./_pages/marcia-adams/marcia-adams').then(m => m.MarciaAdams),
  },
  {
    path: 'main/:id/menu/maps/coth',
    loadComponent: () => import('./_pages/coth/coth').then(m => m.Coth),
  },
  {
    path: 'main/:id/menu/faqs',
    loadComponent: () => import('./_pages/faqs/faqs').then(m => m.Faqs),
  },
  {
    path: 'main/:id/menu/rsvp',
    loadComponent: () => import('./_pages/rsvp/rsvp').then(m => m.Rsvp),
  },
  {
    path: 'main/:id/menu/rsvp/submitted',
    loadComponent: () => import('./_pages/submitted/submitted').then(m => m.Submitted),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];