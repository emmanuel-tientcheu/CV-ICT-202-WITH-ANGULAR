import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioagraphieComponent } from './bioagraphie.component';

describe('BioagraphieComponent', () => {
  let component: BioagraphieComponent;
  let fixture: ComponentFixture<BioagraphieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioagraphieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioagraphieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
