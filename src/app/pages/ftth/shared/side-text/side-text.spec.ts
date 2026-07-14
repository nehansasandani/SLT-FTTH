import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideText } from './side-text';

describe('SideText', () => {
  let component: SideText;
  let fixture: ComponentFixture<SideText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideText],
    }).compileComponents();

    fixture = TestBed.createComponent(SideText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
