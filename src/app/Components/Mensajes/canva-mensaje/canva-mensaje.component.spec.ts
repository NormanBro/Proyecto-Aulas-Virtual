import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaMensajeComponent } from './canva-mensaje.component';

describe('CanvaMensajeComponent', () => {
  let component: CanvaMensajeComponent;
  let fixture: ComponentFixture<CanvaMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvaMensajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvaMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
