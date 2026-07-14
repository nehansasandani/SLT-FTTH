import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTTHComponent } from './ftth';

describe('FTTH', () => {
  let component: FTTHComponent;
  let fixture: ComponentFixture<FTTHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FTTHComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FTTHComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
