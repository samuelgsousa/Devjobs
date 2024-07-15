import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { AppComponent } from './app.component';

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
    { path: '**',
      component: HomeComponent,
      title: 'Home page'
     },
  ];
  export default routeConfig;