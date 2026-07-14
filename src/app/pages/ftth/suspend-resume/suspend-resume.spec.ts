import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendResumeComponent } from './suspend-resume';

describe('SuspendResume', () => {
  let component: SuspendResumeComponent;
  let fixture: ComponentFixture<SuspendResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspendResumeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuspendResumeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
