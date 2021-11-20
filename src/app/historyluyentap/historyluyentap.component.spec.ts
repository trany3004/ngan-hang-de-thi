import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryluyentapComponent } from './historyluyentap.component';

describe('HistoryluyentapComponent', () => {
  let component: HistoryluyentapComponent;
  let fixture: ComponentFixture<HistoryluyentapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryluyentapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryluyentapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
