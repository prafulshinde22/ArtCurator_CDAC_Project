import { Injectable } from '@angular/core';
import { AddProduct } from 'src/app/models/add-product.model';
import { Product } from 'src/app/models/product.model';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  currentUser: User = JSON.parse(JSON.stringify(localStorage.getItem("current_user")));
  baseURL: string = "http://localhost:8080/artcurator/api/product";

  constructor(private http: HttpClient) { }
  
  getProductsByName(searchQuery: string): any {
    return this.http.get(this.baseURL + `/${searchQuery}`, 
    {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  uploadFile(imageFile: File, addProduct: AddProduct) {
    const uploadData = new FormData();
    uploadData.append("image", imageFile);
    console.log(`sending ${addProduct}`);
    console.log("Product data : " + JSON.stringify(addProduct));
    uploadData.append("data", JSON.stringify(addProduct));
    return this.http.post(this.baseURL + '/add/' + localStorage.user_id, uploadData, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  retrieveImage(userId: number) {
    console.log("sending " + `${this.baseURL}download/${userId}`);
    return this.http.get<any>(this.baseURL + '/');
  }

  getProductsById() {
    return this.http.get<Product[]>(this.baseURL + '/unsold/' + localStorage.user_id, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  deleteProduct(id: number) {
    console.log("In product service "+id);
    return this.http.delete(this.baseURL + '/delete/' + id, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  getAllProducts() {
    console.log("In product service");
    return this.http.get<Product[]>(this.baseURL + '/getall', {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  getAllSoldProducts() {
    return this.http.get<Product[]>(this.baseURL + '/sold/'+localStorage.user_id, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  getAllUnSoldProducts() {
    return this.http.get<Product[]>(this.baseURL + '/unsold/'+localStorage.user_id, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }
}  
 
