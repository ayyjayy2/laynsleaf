import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationComponent } from './aviation.component';

describe('AviationComponent', () => {
  let component: AviationComponent;
  let fixture: ComponentFixture<AviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
