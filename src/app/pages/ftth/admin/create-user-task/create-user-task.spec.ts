import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserTaskComponent } from './create-user-task';

describe('CreateUserTask', () => {
  let component: CreateUserTaskComponent;
  let fixture: ComponentFixture<CreateUserTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUserTaskComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
