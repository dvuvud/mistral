import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group } from './group';

describe('Group', () => {
  let component: Group;
  let fixture: ComponentFixture<Group>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Group]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Group);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
