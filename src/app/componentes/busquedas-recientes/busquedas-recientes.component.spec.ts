import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedasRecientesComponent } from './busquedas-recientes.component';

describe('BusquedasRecientesComponent', () => {
  let component: BusquedasRecientesComponent;
  let fixture: ComponentFixture<BusquedasRecientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedasRecientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedasRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
