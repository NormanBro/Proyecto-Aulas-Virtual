import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaHomeComponent } from './canva-home.component';

describe('CanvaHomeComponent', () => {
  let component: CanvaHomeComponent;
  let fixture: ComponentFixture<CanvaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
