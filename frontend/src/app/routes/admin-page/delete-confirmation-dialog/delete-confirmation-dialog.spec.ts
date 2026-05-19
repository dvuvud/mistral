import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationDialog } from './delete-confirmation-dialog';

describe('DeleteConfirmationDialog', () => {
  let component: DeleteConfirmationDialog;
  let fixture: ComponentFixture<DeleteConfirmationDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteConfirmationDialog]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeleteConfirmationDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
