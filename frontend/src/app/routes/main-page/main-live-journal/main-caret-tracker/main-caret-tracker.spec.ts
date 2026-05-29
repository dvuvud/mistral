import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCaretTracker } from './main-caret-tracker';

describe('MainCaretTracker', () => {
  let component: MainCaretTracker;
  let fixture: ComponentFixture<MainCaretTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCaretTracker]
    }).compileComponents();

    fixture = TestBed.createComponent(MainCaretTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
