import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
   {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: 'login',
    renderMode: RenderMode.Client,
  },
  {
    path: 'main/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'main/:id/menu',
    renderMode: RenderMode.Client,
  },
  {
    path: 'main/:id/menu/our-story',
    renderMode: RenderMode.Client,
  },
  {
    path: 'main/:id/menu/details',
    renderMode: RenderMode.Client,
  },
  {
    path: 'main/:id/menu/maps',
    renderMode: RenderMode.Client,
  },
  {
    path: 'main/:id/menu/maps/marcia-adams',
    renderMode: RenderMode.Client,
  },
  {
    path: 'main/:id/menu/maps/coth',
    renderMode: RenderMode.Client,
  },
  {
    path: 'main/:id/menu/faqs',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
