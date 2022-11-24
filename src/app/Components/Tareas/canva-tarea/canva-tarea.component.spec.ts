import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaTareaComponent } from './canva-tarea.component';

describe('CanvaTareaComponent', () => {
  let component: CanvaTareaComponent;
  let fixture: ComponentFixture<CanvaTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvaTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
