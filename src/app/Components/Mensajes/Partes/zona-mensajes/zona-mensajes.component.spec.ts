import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaMensajesComponent } from './zona-mensajes.component';

describe('ZonaMensajesComponent', () => {
  let component: ZonaMensajesComponent;
  let fixture: ComponentFixture<ZonaMensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaMensajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
