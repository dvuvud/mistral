import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialog } from './confirmation-dialog';

describe('ConfirmationDialog', () => {
  let component: ConfirmationDialog;
  let fixture: ComponentFixture<ConfirmationDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationDialog]
    })
<<<<<<< HEAD
      .compileComponents();
=======
    .compileComponents();
>>>>>>> d823078 (La till basic bekräftelseruta, den är inte stylad än. Stor commit förlåt David <3)

    fixture = TestBed.createComponent(ConfirmationDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
