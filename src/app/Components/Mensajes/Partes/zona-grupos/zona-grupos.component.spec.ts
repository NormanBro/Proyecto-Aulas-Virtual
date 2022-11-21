import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaGruposComponent } from './zona-grupos.component';

describe('ZonaGruposComponent', () => {
  let component: ZonaGruposComponent;
  let fixture: ComponentFixture<ZonaGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaGruposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
