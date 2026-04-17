import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLiveJournal } from './main-live-journal';

describe('MainLiveJournal', () => {
  let component: MainLiveJournal;
  let fixture: ComponentFixture<MainLiveJournal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLiveJournal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLiveJournal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
