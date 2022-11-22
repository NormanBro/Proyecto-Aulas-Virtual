import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAccesoAulaComponent } from './dialog-acceso-aula.component';

describe('DialogAccesoAulaComponent', () => {
  let component: DialogAccesoAulaComponent;
  let fixture: ComponentFixture<DialogAccesoAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAccesoAulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAccesoAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
