import { Component, Injectable, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vagapreview } from '../vagapreview';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { VagaService } from '../vaga.service';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-vaga-preview',
  standalone: true,
  imports: [CommonModule, NgbToastModule, RouterModule, VagaPreviewComponent],

  template: `
  <link rel="stylesheet" href="vaga-preview.component.scss">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  <section class="listing">
  
  <div class="card mb-3" style="width: 30rem; height: 33rem;">
  <div class="card-header bg-transparent ">

  <div class="avatar"> {{getInitials("" + Vagapreview?.nome_empresa)}}</div>

    <!-- <img src="https://via.placeholder.com/50" alt="Logo" class="listing-photo"/> -->
    <h1 class="listing-heading">{{Vagapreview?.nome_empresa}}</h1>

  </div>

<div class="card-body">
<h1 class="listing-heading ">{{Vagapreview?.cargo}}</h1>
    <div class="sub-informations">

      <h3>{{Vagapreview?.localidade}}</h3>

      <h3>{{Vagapreview?.data_pub | date:'MMMM-dd-YYYY'}}</h3>

      <h3>{{Vagapreview?.tipo}}</h3>
    </div>

  <div class="desc-container">
    <h2>Descrição:</h2> 
    <p class="card-text">{{Vagapreview?.descricao}}</p>
  </div>

  <h2>Requisitos</h2>

    <ul class="requisitos">
        <li *ngIf="Vagapreview?.requisitos?.length === 0">Nenhum</li>
        <li *ngFor="let requisito of getReq(Vagapreview?.requisitos)">{{requisito}}</li>
    </ul>

    <div class="footer-info">
    <a [routerLink]="['/details', Vagapreview?.id]"><button class="btn" type="submit">Ver mais</button></a>
    </div>

    <router-outlet></router-outlet>
    
</div>

</div>

    
  </section>
  `,
  styleUrl: './vaga-preview.component.css'
})




export class VagaPreviewComponent {


   getReq = (reqList?: any): string[] => {
return reqList?.map((req: { requisito: any; }) => req.requisito)
  }

  getInitials(firstName:string) {
    return firstName[0].toUpperCase();
  }


  @Input() Vagapreview!: Vagapreview
  
  
}


// @Input() Vagapreview!: Vagapreview