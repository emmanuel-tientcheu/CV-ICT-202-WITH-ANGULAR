import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInformationComponent } from './about-information.component';

describe('AboutInformationComponent', () => {
  let component: AboutInformationComponent;
  let fixture: ComponentFixture<AboutInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
