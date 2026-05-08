import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Information } from './information';

describe('Information', () => {
  let component: Information;
  let fixture: ComponentFixture<Information>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Information]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Information);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
