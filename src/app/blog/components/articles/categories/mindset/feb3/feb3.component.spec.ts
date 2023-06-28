import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb3Component } from './feb3.component';

describe('Feb3Component', () => {
  let component: Feb3Component;
  let fixture: ComponentFixture<Feb3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
