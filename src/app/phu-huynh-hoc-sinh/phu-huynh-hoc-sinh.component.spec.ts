import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhuHuynhHocSinhComponent } from './phu-huynh-hoc-sinh.component';

describe('PhuHuynhHocSinhComponent', () => {
  let component: PhuHuynhHocSinhComponent;
  let fixture: ComponentFixture<PhuHuynhHocSinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhuHuynhHocSinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhuHuynhHocSinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
