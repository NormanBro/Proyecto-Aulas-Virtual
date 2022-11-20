import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMensajeComponent } from './body-mensaje.component';

describe('BodyMensajeComponent', () => {
  let component: BodyMensajeComponent;
  let fixture: ComponentFixture<BodyMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMensajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
