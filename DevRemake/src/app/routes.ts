import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';


NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

const routeConfig: Routes = [
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

  
  export default routeConfig;