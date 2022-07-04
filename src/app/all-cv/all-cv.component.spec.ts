import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCvComponent } from './all-cv.component';

describe('AllCvComponent', () => {
  let component: AllCvComponent;
  let fixture: ComponentFixture<AllCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
