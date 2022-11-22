import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaAddMaterialComponent } from './canva-add-material.component';

describe('CanvaAddMaterialComponent', () => {
  let component: CanvaAddMaterialComponent;
  let fixture: ComponentFixture<CanvaAddMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvaAddMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvaAddMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
