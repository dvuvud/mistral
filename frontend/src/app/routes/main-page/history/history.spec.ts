import { ComponentFixture, TestBed } from '@angular/core/testing';

import { History } from './history';

describe('History', () => {
  let component: History;
  let fixture: ComponentFixture<History>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [History]
    })
<<<<<<< HEAD
      .compileComponents();
=======
    .compileComponents();
>>>>>>> e2d4b87 (basic logic för att fetcha ett barns journaler och en tab för history)

    fixture = TestBed.createComponent(History);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
