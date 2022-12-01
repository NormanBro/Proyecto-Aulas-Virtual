import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVerCodigoComponent } from './dialog-ver-codigo.component';

describe('DialogVerCodigoComponent', () => {
  let component: DialogVerCodigoComponent;
  let fixture: ComponentFixture<DialogVerCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVerCodigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVerCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
