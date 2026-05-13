import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveUsers } from './inactive-users';

describe('InactiveUsers', () => {
  let component: InactiveUsers;
  let fixture: ComponentFixture<InactiveUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactiveUsers]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InactiveUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
