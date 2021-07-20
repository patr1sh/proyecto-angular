import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.css']
})
export class HomePacienteComponent implements OnInit {

  menuPacientes: boolean = false;
  controlVistas = 'horasAgendadas';
  opcionesMenu = 'menuPrincipal';
  constructor() { }

  ngOnInit(): void {
  }
  manejaMenuPacientes(){
    this.menuPacientes = !this.menuPacientes;
  }

}
