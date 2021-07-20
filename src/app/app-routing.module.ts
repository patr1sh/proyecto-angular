import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePacienteComponent } from './componentes/home-paciente/home-paciente.component';
import { HomePsicologoComponent } from './componentes/home-psicologo/home-psicologo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'homePsicologo', component: HomePsicologoComponent },
  { path: 'homePaciente', component: HomePacienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
