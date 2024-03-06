import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { HeaderComponent } from '../../componentes/header/header.component';
import { PrincipalComponent } from '../../componentes/principal/principal.component';
import { FooterComponent } from '../../componentes/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContainerComponent,
    HeaderComponent,
    PrincipalComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
