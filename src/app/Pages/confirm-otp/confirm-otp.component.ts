import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.scss']
})
export class ConfirmOtpComponent {

constructor(private router:Router){
}

gotoPayment(){
  this.router.navigate(['paymentConfirm']);
}

}
