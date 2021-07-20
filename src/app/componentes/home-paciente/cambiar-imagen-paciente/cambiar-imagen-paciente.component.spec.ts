import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarImagenPacienteComponent } from './cambiar-imagen-paciente.component';

describe('CambiarImagenPacienteComponent', () => {
  let component: CambiarImagenPacienteComponent;
  let fixture: ComponentFixture<CambiarImagenPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarImagenPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarImagenPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
