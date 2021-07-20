import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProfesionalComponent } from './buscar-profesional.component';

describe('BuscarProfesionalComponent', () => {
  let component: BuscarProfesionalComponent;
  let fixture: ComponentFixture<BuscarProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProfesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
