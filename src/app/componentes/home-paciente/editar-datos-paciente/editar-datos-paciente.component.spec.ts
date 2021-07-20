import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDatosPacienteComponent } from './editar-datos-paciente.component';

describe('EditarDatosPacienteComponent', () => {
  let component: EditarDatosPacienteComponent;
  let fixture: ComponentFixture<EditarDatosPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDatosPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDatosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
