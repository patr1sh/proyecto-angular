import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasAgendadasPacienteComponent } from './horas-agendadas-paciente.component';

describe('HorasAgendadasPacienteComponent', () => {
  let component: HorasAgendadasPacienteComponent;
  let fixture: ComponentFixture<HorasAgendadasPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorasAgendadasPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasAgendadasPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
