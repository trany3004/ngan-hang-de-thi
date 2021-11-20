import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhhocontapComponent } from './sinhhocontap.component';

describe('SinhhocontapComponent', () => {
  let component: SinhhocontapComponent;
  let fixture: ComponentFixture<SinhhocontapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinhhocontapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhhocontapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
