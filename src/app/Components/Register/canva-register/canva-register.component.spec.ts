import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaRegisterComponent } from './canva-register.component';

describe('CanvaRegisterComponent', () => {
  let component: CanvaRegisterComponent;
  let fixture: ComponentFixture<CanvaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvaRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
