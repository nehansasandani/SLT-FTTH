import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOntSnComponent } from './change-ont-sn';

describe('ChangeOntSn', () => {
  let component: ChangeOntSnComponent;
  let fixture: ComponentFixture<ChangeOntSnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeOntSnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeOntSnComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
