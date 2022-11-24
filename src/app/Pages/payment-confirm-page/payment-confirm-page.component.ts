import { Component,OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PaymentDialogComponent } from 'src/app/Components/payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-payment-confirm-page',
  templateUrl: './payment-confirm-page.component.html',
  styleUrls: ['./payment-confirm-page.component.scss']
})
export class PaymentConfirmPageComponent {
  

  constructor(private dialog:MatDialog, private router:Router){}

  

  // openWebxpay=async()=>{

  // }


  

  openWebxpay(){
    this.router.navigate(['customerDetails']);
}


}
