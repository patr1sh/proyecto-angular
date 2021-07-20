import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarHorarioComponent } from './cargar-horario.component';

describe('CargarHorarioComponent', () => {
  let component: CargarHorarioComponent;
  let fixture: ComponentFixture<CargarHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
