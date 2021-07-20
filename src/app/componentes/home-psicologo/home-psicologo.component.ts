import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-psicologo',
  templateUrl: './home-psicologo.component.html',
  styleUrls: ['./home-psicologo.component.css']
})
export class HomePsicologoComponent implements OnInit {

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
