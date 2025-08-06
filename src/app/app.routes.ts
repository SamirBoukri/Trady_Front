import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./features/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'portefeuilles',
    loadChildren: () =>
      import('./features/portefeuille/portefeuille.module').then((m) => m.PortefeuilleModule),
  },
];

