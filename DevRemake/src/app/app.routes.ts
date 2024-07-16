import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

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
        path: '**', 
        redirectTo: '', 
        pathMatch: 'full'

    }
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
