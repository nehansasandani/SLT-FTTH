import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtthForm } from './ftth-form';

describe('FtthForm', () => {
  let component: FtthForm;
  let fixture: ComponentFixture<FtthForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtthForm],
    }).compileComponents();

    fixture = TestBed.createComponent(FtthForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
