import { Component } from '@angular/core';
import * as jsEncrypt from 'jsencrypt';

@Component({
  selector: 'app-callback-page',
  templateUrl: './callback-page.component.html',
  styleUrls: ['./callback-page.component.scss']
})
export class CallbackPageComponent {

  url="https://stagingxpay.info/index.php?route=checkout/billing";
  key = '-----BEGIN PUBLIC KEY-----\n' +
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCp0c4+XHtCMcAGgOioDFZziFiQ\n' +
  '2Hqu/E7nHR60btWj2FSCkba1L9CuZ3wfAFM9XmbWdO2akFaBdH933lsIIQOV6usM\n' +
  'hkfNU0PF2rvd6f6zMNsA7susU/5F+SszoKIkQj5Yovyw4ygYHaUE0uveq04s50TD\n' +
  'VszPZ9ljZ3WQD5l4yQIDAQAB\n' +
  '-----END PUBLIC KEY-----';
  encryptedData:any;

  ngOnInit() {

    //Decrypting data
    var decrypt2 = new jsEncrypt.JSEncrypt();
    decrypt2.setPrivateKey(this.key);
    var uncrypted2 = decrypt2.decrypt(this.encryptedData);
    console.log(uncrypted2);

  }


}
