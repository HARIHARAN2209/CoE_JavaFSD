import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalTakenComponent } from './rental-taken.component';

describe('RentalTakenComponent', () => {
  let component: RentalTakenComponent;
  let fixture: ComponentFixture<RentalTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalTakenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
