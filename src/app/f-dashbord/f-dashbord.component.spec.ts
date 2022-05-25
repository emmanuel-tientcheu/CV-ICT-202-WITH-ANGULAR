import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDashbordComponent } from './f-dashbord.component';

describe('FDashbordComponent', () => {
  let component: FDashbordComponent;
  let fixture: ComponentFixture<FDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
