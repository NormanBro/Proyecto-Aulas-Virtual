import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEstudianteComponent } from './nav-estudiante.component';

describe('NavEstudianteComponent', () => {
  let component: NavEstudianteComponent;
  let fixture: ComponentFixture<NavEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
