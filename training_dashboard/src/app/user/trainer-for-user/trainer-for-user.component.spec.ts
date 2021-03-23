import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerForUserComponent } from './trainer-for-user.component';

describe('TrainerForUserComponent', () => {
  let component: TrainerForUserComponent;
  let fixture: ComponentFixture<TrainerForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerForUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
