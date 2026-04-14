import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContainer } from './login-container';

describe('LoginContainer', () => {
  let component: LoginContainer;
  let fixture: ComponentFixture<LoginContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
