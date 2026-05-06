import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPresenceIndicator } from './main-presence-indicator';

describe('MainPresenceIndicator', () => {
  let component: MainPresenceIndicator;
  let fixture: ComponentFixture<MainPresenceIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPresenceIndicator]
    }).compileComponents();

    fixture = TestBed.createComponent(MainPresenceIndicator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
