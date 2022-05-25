import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasBordComponent } from './das-bord.component';

describe('DasBordComponent', () => {
  let component: DasBordComponent;
  let fixture: ComponentFixture<DasBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasBordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
