import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as jsEncrypt from 'jsencrypt';
import {CustomerDetails} from '../../Models/customer-details';

@Component({
  selector: 'app-customer-details-page',
  templateUrl: './customer-details-page.component.html',
  styleUrls: ['./customer-details-page.component.scss']
})
export class CustomerDetailsPageComponent implements OnInit {

  constructor(private http:HttpClient){
    this.urlEndpoint = 'https://stagingxpay.info/index.php?route=checkout/billing';
  }

  url="https://stagingxpay.info/index.php?route=checkout/billing";
  key = '-----BEGIN PUBLIC KEY-----\n' +
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCp0c4+XHtCMcAGgOioDFZziFiQ\n' +
  '2Hqu/E7nHR60btWj2FSCkba1L9CuZ3wfAFM9XmbWdO2akFaBdH933lsIIQOV6usM\n' +
  'hkfNU0PF2rvd6f6zMNsA7susU/5F+SszoKIkQj5Yovyw4ygYHaUE0uveq04s50TD\n' +
  'VszPZ9ljZ3WQD5l4yQIDAQAB\n' +
  '-----END PUBLIC KEY-----';
  urlEndpoint: any;
  reqBody: any;
  first_name=''
  last_name=''
  email=''
  contact_no=''
  address_line_one=''
  address_line_two=''
  process_currency=''
  secret_key=''
  state=''
  country=''
  postal_code=''


  
  
  // cust_details:CustomerDetails={
  // first_name:'Pavan',
  // last_name:'Silva',
  // email:'pavan@gmail.com',
  // contact_number:'0770000002',
  // address_line_one:'46/46, Level 5, Green Lanka Towers, Nawam Mawatha,',
  // process_currency:'LKR',
  // secret_key:'71400ba9-42a1-43b5-811f-400398ba1c5b',
  // city:'Colombo',
  // state:'Western',
  // postal_code:'10300',
  // enc_method:'JCs3J+6oSz4V0LgE0zi/Bg==',
  // country:'Sri Lanka',
  // total_payment:'525'
  // }
  payment: any;
  

  ngOnInit() {
    let text = '525|10';

    var encrypt = new jsEncrypt.JSEncrypt(); 
    encrypt.setPublicKey(this.key); 
    this.payment = encrypt.encrypt(text);
    // console.log(this.payment);
    

  }

  // submitForm(){
  //   // this.http.post('https://stagingxpay.info/index.php?route=checkout/billing',this.cust_details).subscribe((res)=>{console.log(res)});
  //   // console.log(this.cust_details);
  //   // var pageContentUrl = 'data:text/html;base64,';
  // }

  onLoad(){
    console.log('onLoad triggered.');
  }

  submitForm(){
    
  //   this.http.post(this.urlEndpoint, this.first_name+
  // this.last_name+
  // this.email+
  // this.contact_no+
  // this.address_line_one+
  // this.address_line_two+
  // this.process_currency+
  // this.secret_key+
  // this.state+
  // this.country+
  // this.postal_code);
  }

}
