import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.scss']
})

export class OtpPageComponent {

  constructor(private router:Router){}

  sendOtp(){
    this.router.navigate(['confirmOtp']);
  }
}


