import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckrideFlashcardsComponent } from './checkride-flashcards.component';

describe('CheckrideFlashcardsComponent', () => {
  let component: CheckrideFlashcardsComponent;
  let fixture: ComponentFixture<CheckrideFlashcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckrideFlashcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckrideFlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
