import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAddMaterialComponent } from './body-add-material.component';

describe('BodyAddMaterialComponent', () => {
  let component: BodyAddMaterialComponent;
  let fixture: ComponentFixture<BodyAddMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAddMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyAddMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
