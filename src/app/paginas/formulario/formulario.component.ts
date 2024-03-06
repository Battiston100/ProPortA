import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  contatoForm!: FormGroup;

  constructor(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('')
    })
  }

  salvarContato(){
    if(this.contatoForm.valid){
      console.log(this.contatoForm.value)
    }
  }

  cancelar(){
    console.log('Submissão cancelada')
  }

}
