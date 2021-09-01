import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuyentapComponent } from './luyentap.component';

describe('LuyentapComponent', () => {
  let component: LuyentapComponent;
  let fixture: ComponentFixture<LuyentapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuyentapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuyentapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
