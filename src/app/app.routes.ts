import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () =>
        import('./features/home/home.component').then(m => m.HomeComponent),
    },
    {
      path: 'menu',
      loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'coffee',
        loadComponent: () => import('./pages/coffee/coffee.component').then(m => m.CoffeeComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
    },
  ];
