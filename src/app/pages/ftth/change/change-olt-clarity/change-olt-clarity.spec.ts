import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOLTClarityComponent } from './change-olt-clarity';

describe('ChangeOLTClarity', () => {
  let component: ChangeOLTClarityComponent;
  let fixture: ComponentFixture<ChangeOLTClarityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeOLTClarityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeOLTClarityComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
