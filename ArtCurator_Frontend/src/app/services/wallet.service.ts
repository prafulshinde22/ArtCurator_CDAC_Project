import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private baseUrl = 'http://localhost:8080/artcurator/api/wallet';

  constructor(private router: Router, private http: HttpClient) { }

  getWallet() {
    console.log("In buyer wallet service");
    return this.http.get<any>(this.baseUrl + '/' + localStorage.user_id, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  addToWallet(amount: number): Observable<String> {
    console.log("In update buyer wallet service : " + amount);
    return this.http.put(this.baseUrl + '/addmoney?user_id=' + localStorage.user_id + '&amount=' + amount, null, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    }).pipe(map(response => {
      console.log("In wallet service + " + response);
      this.router.navigateByUrl('/buyerhome');
      return response.toString();
    }));
  }
}
