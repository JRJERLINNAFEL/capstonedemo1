import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyregisteredComponent } from './successfullyregistered.component';

describe('SuccessfullyregisteredComponent', () => {
  let component: SuccessfullyregisteredComponent;
  let fixture: ComponentFixture<SuccessfullyregisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullyregisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullyregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
