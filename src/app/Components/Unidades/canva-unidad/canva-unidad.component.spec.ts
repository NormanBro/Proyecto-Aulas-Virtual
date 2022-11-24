import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaUnidadComponent } from './canva-unidad.component';

describe('CanvaUnidadComponent', () => {
  let component: CanvaUnidadComponent;
  let fixture: ComponentFixture<CanvaUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvaUnidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvaUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
