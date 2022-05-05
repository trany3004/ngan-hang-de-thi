import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailamcuatoiComponent } from './bailamcuatoi.component';

describe('BailamcuatoiComponent', () => {
  let component: BailamcuatoiComponent;
  let fixture: ComponentFixture<BailamcuatoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BailamcuatoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BailamcuatoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
