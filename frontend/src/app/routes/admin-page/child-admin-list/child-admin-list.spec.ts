import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAdminList } from './child-admin-list';

describe('ChildAdminList', () => {
  let component: ChildAdminList;
  let fixture: ComponentFixture<ChildAdminList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildAdminList]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildAdminList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
