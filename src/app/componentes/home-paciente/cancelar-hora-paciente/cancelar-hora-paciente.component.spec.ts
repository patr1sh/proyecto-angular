import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarHoraPacienteComponent } from './cancelar-hora-paciente.component';

describe('CancelarHoraPacienteComponent', () => {
  let component: CancelarHoraPacienteComponent;
  let fixture: ComponentFixture<CancelarHoraPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarHoraPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarHoraPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
