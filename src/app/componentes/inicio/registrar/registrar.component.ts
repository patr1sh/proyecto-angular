import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  formPaciente: FormGroup;
  formPsicologo: FormGroup;
  controlVista: string = 'paciente';
  constructor() { }

  ngOnInit(): void {
  }
  registrarPsicologo(){}

}
