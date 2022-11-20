import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMaestroComponent } from './home-maestro.component';

describe('HomeMaestroComponent', () => {
  let component: HomeMaestroComponent;
  let fixture: ComponentFixture<HomeMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMaestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
