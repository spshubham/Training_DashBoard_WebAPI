import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDefaultComponent } from './trainer-default.component';

describe('TrainerDefaultComponent', () => {
  let component: TrainerDefaultComponent;
  let fixture: ComponentFixture<TrainerDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
