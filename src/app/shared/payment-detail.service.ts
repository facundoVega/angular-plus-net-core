import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  readonly  rootUrl = 'http://localhost:63069/api/paymentdetails';
  formData:PaymentDetail =
  {
    CVV: null,
    CardNumber: null,
    CardOwnerName: null,
    ExpirationDate: null,
    PMId: 0
  };
  list:PaymentDetail[];

  constructor(private http:HttpClient) { }


  postPaymentDetail(){
    console.log(this.formData);
    return this.http.post(this.rootUrl,this.formData);
  }

  putPaymentDetail(){
    return this.http.put(`${this.rootUrl}/${this.formData.PMId}`,this.formData);
  }
  deletePaymentDetail(PMId){
    return this.http.delete(`${this.rootUrl}/${PMId}`);
  }




  refreshList(){
    return this.http.get(this.rootUrl)
    .toPromise()
    .then( res => this.list = res as PaymentDetail[])
    .catch();
  }
}
