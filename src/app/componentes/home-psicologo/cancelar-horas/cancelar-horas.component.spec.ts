import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarHorasComponent } from './cancelar-horas.component';

describe('CancelarHorasComponent', () => {
  let component: CancelarHorasComponent;
  let fixture: ComponentFixture<CancelarHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarHorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
