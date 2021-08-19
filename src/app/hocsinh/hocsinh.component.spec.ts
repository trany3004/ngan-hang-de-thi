import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HocsinhComponent } from './hocsinh.component';

describe('HocsinhComponent', () => {
  let component: HocsinhComponent;
  let fixture: ComponentFixture<HocsinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HocsinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HocsinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
