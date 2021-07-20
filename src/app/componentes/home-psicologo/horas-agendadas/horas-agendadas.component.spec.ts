import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasAgendadasComponent } from './horas-agendadas.component';

describe('HorasAgendadasComponent', () => {
  let component: HorasAgendadasComponent;
  let fixture: ComponentFixture<HorasAgendadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorasAgendadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasAgendadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
