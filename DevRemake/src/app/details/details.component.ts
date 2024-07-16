import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, importProvidersFrom, inject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vagapreview } from '../vagapreview';
import { VagaPreviewComponent } from '../vaga-preview/vaga-preview.component';
import { VagaService } from '../vaga.service';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Injectable({ providedIn: 'root' })



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, NgbToastModule, VagaPreviewComponent], 
  template:`
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  
  <body class="bg-teaser">
    
               <div class="title">
                 <img src="https://via.placeholder.com/120" alt="" />
                 <div className="website">
                     <h1>{{vagaPreview?.nome_empresa}}</h1>
                     <h2> <a href="https://portifolio-seven-wine.vercel.app/content/index.html" target='_blank'>{{vagaPreview?.nome_empresa}}.com</a> </h2>
                 </div>
              </div>
    
              <article>
                  <div className="cabecalho_vaga">
                      <div>
                         <h1>{{vagaPreview?.cargo}}</h1>
                          <h2 id="data">{{vagaPreview?.data_pub | date:'MMMM-dd-YYYY'}} - {{vagaPreview?.localidade}} - {{vagaPreview?.tipo}}</h2>
    
                      </div>
    
                  </div>
                  <p>{{vagaPreview?.descricao}}</p>
              <h1>Requisitos:</h1>
                  <ul class="requisitos">
                  <li *ngIf="vagaPreview?.requisitos?.length === 0">Nenhum</li>
                  <li *ngFor="let requisito of getReq(vagaPreview?.requisitos)">{{requisito}}</li>
                  </ul>
    
                  <a href="https://portifolio-seven-wine.vercel.app/content/index.html" target='_blank'><button type="button" class="btn btn-success" size="sm">Aplicar para a vaga</button></a>
              </article>
  </body>
  `,
  styleUrl: './details.component.css'
})

export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute)
    vagaService = inject(VagaService)
    vagaPreview: Vagapreview | undefined

    getReq = (reqList: any): string[] => {
      return (reqList?.map((req: { requisito: any; }) => req.requisito))
        }

        constructor() {
          const vagaPreviewId = Number(this.route.snapshot.params['id'])
          this.vagaService.getVagaById(vagaPreviewId).then(vagaPreview => {
            this.vagaPreview = vagaPreview
          })
        }

}

