import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage } from './admin-page';

describe('AdminPage', () => {
  let component: AdminPage;
  let fixture: ComponentFixture<AdminPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
