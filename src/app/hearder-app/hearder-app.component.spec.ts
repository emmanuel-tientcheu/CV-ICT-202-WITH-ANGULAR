import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderAppComponent } from './hearder-app.component';

describe('HearderAppComponent', () => {
  let component: HearderAppComponent;
  let fixture: ComponentFixture<HearderAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearderAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
