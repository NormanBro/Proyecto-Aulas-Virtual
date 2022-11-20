import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaNotificacionComponent } from './canva-notificacion.component';

describe('CanvaNotificacionComponent', () => {
  let component: CanvaNotificacionComponent;
  let fixture: ComponentFixture<CanvaNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvaNotificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvaNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
