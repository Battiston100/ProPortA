import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [CommonModule, 
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    PrincipalComponent,
    FooterComponent,
    FormularioComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProPortA';
}
