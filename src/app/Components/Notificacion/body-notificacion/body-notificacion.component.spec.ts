import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyNotificacionComponent } from './body-notificacion.component';

describe('BodyNotificacionComponent', () => {
  let component: BodyNotificacionComponent;
  let fixture: ComponentFixture<BodyNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyNotificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
