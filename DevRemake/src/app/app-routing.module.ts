import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Vaga details',
  },
  { path: '**', redirectTo: '' }  // redireciona para a rota inicial caso não encontre a rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
