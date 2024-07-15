import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
     {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Vaga details',
    },    
     {
        path: 'browser/browser/index.html/',
        component: HomeComponent,
        title: 'Home page',
      },
      {
        path: 'browser/index.html/',
        component: HomeComponent,
        title: 'Home page',
      },
];
