import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTareaComponent } from './body-tarea.component';

describe('BodyTareaComponent', () => {
  let component: BodyTareaComponent;
  let fixture: ComponentFixture<BodyTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
