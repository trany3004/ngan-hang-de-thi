import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThayCoGiaoComponent } from './thay-co-giao.component';

describe('ThayCoGiaoComponent', () => {
  let component: ThayCoGiaoComponent;
  let fixture: ComponentFixture<ThayCoGiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThayCoGiaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThayCoGiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
