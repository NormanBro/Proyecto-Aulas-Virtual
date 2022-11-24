import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyUnidadComponent } from './body-unidad.component';

describe('BodyUnidadComponent', () => {
  let component: BodyUnidadComponent;
  let fixture: ComponentFixture<BodyUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyUnidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
