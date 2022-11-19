import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaLoginComponent } from './canva-login.component';

describe('CanvaLoginComponent', () => {
  let component: CanvaLoginComponent;
  let fixture: ComponentFixture<CanvaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvaLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
