import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpPageComponent } from './Pages/otp-page/otp-page.component';
import { ConfirmOtpComponent } from './Pages/confirm-otp/confirm-otp.component';
import { PaymentConfirmPageComponent } from './Pages/payment-confirm-page/payment-confirm-page.component';

const routes: Routes = [
  {component:OtpPageComponent,path:''},
  {component:OtpPageComponent,path:'otp'},
  {component:ConfirmOtpComponent,path:'confirmOtp'},
  {component:PaymentConfirmPageComponent,path:'paymentConfirm'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  OtpPageComponent,
  ConfirmOtpComponent,
  PaymentConfirmPageComponent
];
