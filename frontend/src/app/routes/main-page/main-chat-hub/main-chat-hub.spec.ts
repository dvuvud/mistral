import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatHub } from './main-chat-hub';

describe('MainChatHub', () => {
  let component: MainChatHub;
  let fixture: ComponentFixture<MainChatHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainChatHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainChatHub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
