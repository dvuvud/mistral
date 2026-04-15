import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceBox } from './attendance-box';

describe('AttendanceBox', () => {
  let component: AttendanceBox;
  let fixture: ComponentFixture<AttendanceBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
