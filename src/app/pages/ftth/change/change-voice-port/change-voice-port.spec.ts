import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeVoicePortComponent } from './change-voice-port';

describe('ChangeVoicePort', () => {
  let component: ChangeVoicePortComponent;
  let fixture: ComponentFixture<ChangeVoicePortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeVoicePortComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeVoicePortComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
