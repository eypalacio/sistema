import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSistemaComponent } from './formulario-sistema.component';

describe('FormularioSistemaComponent', () => {
  let component: FormularioSistemaComponent;
  let fixture: ComponentFixture<FormularioSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
