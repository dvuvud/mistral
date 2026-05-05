import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPage } from './account-page';

describe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
