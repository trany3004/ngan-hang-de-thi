import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntapComponent } from './ontap.component';

describe('OntapComponent', () => {
  let component: OntapComponent;
  let fixture: ComponentFixture<OntapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OntapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OntapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
