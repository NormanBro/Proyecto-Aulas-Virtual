import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTutorComponent } from './nav-tutor.component';

describe('NavTutorComponent', () => {
  let component: NavTutorComponent;
  let fixture: ComponentFixture<NavTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
