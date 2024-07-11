import { Component, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
  template:`

    <main>
    <a [routerLink]="['/']">
    <app-header></app-header>
      </a> 
      <section class="content">
        <router-outlet></router-outlet>
        <app-home></app-home>
      </section>
    </main>
    
    

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Devjobs';


}

