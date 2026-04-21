import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildForm } from './add-child-form';

describe('AddChildForm', () => {
  let component: AddChildForm;
  let fixture: ComponentFixture<AddChildForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChildForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChildForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
