import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../models/address.model';
@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private baseUrl = 'http://localhost:8080/artcurator/api/address';

  constructor(private http: HttpClient) { }
  getUserAddresses() {
    return this.http.get<Address[]>(this.baseUrl + '/addresses/' + localStorage.user_id, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  changeAddress(address: object) {
    console.log(address);
    const userId = window.localStorage.user_id;
    return this.http.put(
      this.baseUrl + `/updateaddress/${userId}`,
      address,
      {
        headers: {
          'Authorization': "Bearer " + window.localStorage.getItem("jwt")
        }
      }
    );
  }
}
