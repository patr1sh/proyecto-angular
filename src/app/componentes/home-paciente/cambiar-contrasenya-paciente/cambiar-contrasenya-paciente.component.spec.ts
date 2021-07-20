import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContrasenyaPacienteComponent } from './cambiar-contrasenya-paciente.component';

describe('CambiarContrasenyaPacienteComponent', () => {
  let component: CambiarContrasenyaPacienteComponent;
  let fixture: ComponentFixture<CambiarContrasenyaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarContrasenyaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarContrasenyaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
