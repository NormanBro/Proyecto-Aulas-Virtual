import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaestroComponent } from './form-maestro.component';

describe('FormMaestroComponent', () => {
  let component: FormMaestroComponent;
  let fixture: ComponentFixture<FormMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMaestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
