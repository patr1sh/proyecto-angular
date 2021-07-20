import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarHorasComponent } from './agendar-horas.component';

describe('AgendarHorasComponent', () => {
  let component: AgendarHorasComponent;
  let fixture: ComponentFixture<AgendarHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarHorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
