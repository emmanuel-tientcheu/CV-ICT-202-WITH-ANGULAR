import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FHeaderComponent } from './f-header.component';

describe('FHeaderComponent', () => {
  let component: FHeaderComponent;
  let fixture: ComponentFixture<FHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
