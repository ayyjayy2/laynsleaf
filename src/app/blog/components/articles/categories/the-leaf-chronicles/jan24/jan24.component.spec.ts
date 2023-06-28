import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan24Component } from './jan24.component';

describe('Jan24Component', () => {
  let component: Jan24Component;
  let fixture: ComponentFixture<Jan24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
