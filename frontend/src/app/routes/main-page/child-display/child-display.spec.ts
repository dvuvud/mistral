import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDisplay } from './child-display';

describe('ChildDisplay', () => {
  let component: ChildDisplay;
  let fixture: ComponentFixture<ChildDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
