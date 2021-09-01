import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanGiamHieuComponent } from './ban-giam-hieu.component';

describe('BanGiamHieuComponent', () => {
  let component: BanGiamHieuComponent;
  let fixture: ComponentFixture<BanGiamHieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanGiamHieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanGiamHieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
