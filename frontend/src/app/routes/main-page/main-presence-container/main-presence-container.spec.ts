import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPresenceContainer } from './main-presence-container';

describe('MainPresenceContainer', () => {
  let component: MainPresenceContainer;
  let fixture: ComponentFixture<MainPresenceContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPresenceContainer]
    }).compileComponents();

    fixture = TestBed.createComponent(MainPresenceContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
