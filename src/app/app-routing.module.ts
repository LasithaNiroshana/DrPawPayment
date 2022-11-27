import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpPageComponent } from './Pages/otp-page/otp-page.component';
import { ConfirmOtpComponent } from './Pages/confirm-otp/confirm-otp.component';
import { PaymentConfirmPageComponent } from './Pages/payment-confirm-page/payment-confirm-page.component';
import { CustomerDetailsPageComponent } from './Pages/customer-details-page/customer-details-page.component';
import { CallbackPageComponent } from './Pages/callback-page/callback-page.component';
import { PaymentSuccessPageComponent } from './Pages/payment-success-page/payment-success-page.component';
import { PaymentFailedPageComponent } from './Pages/payment-failed-page/payment-failed-page.component';



const routes: Routes = [
  {component:OtpPageComponent,path:''},
  {component:OtpPageComponent,path:'otp'},
  {component:ConfirmOtpComponent,path:'confirmOtp'},
  {component:PaymentConfirmPageComponent,path:'paymentConfirm'},
  {component:CustomerDetailsPageComponent,path:'customerDetails'},
  {component:CallbackPageComponent,path:'callback'},
  {component:PaymentSuccessPageComponent,path:'paymentSuccess'},
  {component:PaymentFailedPageComponent,path:'paymentFailed'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  OtpPageComponent,
  ConfirmOtpComponent,
  PaymentConfirmPageComponent,
  CustomerDetailsPageComponent,
  CallbackPageComponent,
  PaymentSuccessPageComponent,
  PaymentFailedPageComponent
];
