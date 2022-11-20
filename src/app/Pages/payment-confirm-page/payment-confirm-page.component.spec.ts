import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfirmPageComponent } from './payment-confirm-page.component';

describe('PaymentConfirmPageComponent', () => {
  let component: PaymentConfirmPageComponent;
  let fixture: ComponentFixture<PaymentConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentConfirmPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
