import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TructuyenComponent } from './tructuyen.component';

describe('TructuyenComponent', () => {
  let component: TructuyenComponent;
  let fixture: ComponentFixture<TructuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TructuyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TructuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
