import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistrarComponent } from './componentes/inicio/registrar/registrar.component';
import { LogearComponent } from './componentes/inicio/logear/logear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePsicologoComponent } from './componentes/home-psicologo/home-psicologo.component';
import { HorasAgendadasComponent } from './componentes/home-psicologo/horas-agendadas/horas-agendadas.component';
import { AgendarHorasComponent } from './componentes/home-psicologo/agendar-horas/agendar-horas.component';
import { CancelarHorasComponent } from './componentes/home-psicologo/cancelar-horas/cancelar-horas.component';
import { FichasClinicasComponent } from './componentes/home-psicologo/fichas-clinicas/fichas-clinicas.component';
import { CargarHorarioComponent } from './componentes/home-psicologo/cargar-horario/cargar-horario.component';
import { EditarDatosComponent } from './componentes/home-psicologo/editar-datos/editar-datos.component';
import { CambiarContrasenyaComponent } from './componentes/home-psicologo/cambiar-contrasenya/cambiar-contrasenya.component';
import { CambiarImagenComponent } from './componentes/home-psicologo/cambiar-imagen/cambiar-imagen.component';
import { HomePacienteComponent } from './componentes/home-paciente/home-paciente.component';
import { EditarDatosPacienteComponent } from './componentes/home-paciente/editar-datos-paciente/editar-datos-paciente.component';
import { CambiarContrasenyaPacienteComponent } from './componentes/home-paciente/cambiar-contrasenya-paciente/cambiar-contrasenya-paciente.component';
import { CambiarImagenPacienteComponent } from './componentes/home-paciente/cambiar-imagen-paciente/cambiar-imagen-paciente.component';
import { BuscarProfesionalComponent } from './componentes/home-paciente/buscar-profesional/buscar-profesional.component';
import { CancelarHoraPacienteComponent } from './componentes/home-paciente/cancelar-hora-paciente/cancelar-hora-paciente.component';
import { HorasAgendadasPacienteComponent } from './componentes/home-paciente/horas-agendadas-paciente/horas-agendadas-paciente.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistrarComponent,
    LogearComponent,
    HomePsicologoComponent,
    HorasAgendadasComponent,
    AgendarHorasComponent,
    CancelarHorasComponent,
    FichasClinicasComponent,
    CargarHorarioComponent,
    EditarDatosComponent,
    CambiarContrasenyaComponent,
    CambiarImagenComponent,
    HomePacienteComponent,
    EditarDatosPacienteComponent,
    CambiarContrasenyaPacienteComponent,
    CambiarImagenPacienteComponent,
    BuscarProfesionalComponent,
    CancelarHoraPacienteComponent,
    HorasAgendadasPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
