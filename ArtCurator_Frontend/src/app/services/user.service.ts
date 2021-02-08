import { baseUrl } from './../config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserRegistration } from '../models/user-registration.model';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UpdatePasswordRequest } from '../models/update-password-request.model';
import { ChangePasswordRequest } from '../models/change-password-request.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User = new User();
  user_id: number = 0;
  user_role: string = "";
  message: string = "";

  private baseUrl = 'http://localhost:8080/artcurator/api/user';

  constructor(private router: Router, private http: HttpClient) { }

  addUser(dto: UserRegistration) {
    return this.http.post<any>(this.baseUrl + '/signup', dto);
  }

  authenticate(req: Login): Observable<String> {
    if (window.localStorage.getItem("user_id")) {
      if (window.localStorage.getItem("user_role") === "SELLER") {
        this.router.navigateByUrl('/sellerhome');
      } else {
        this.router.navigateByUrl('/buyerhome');
      }
    }

    return this.http.post<any>(this.baseUrl + '/login', req).pipe(map(jwt => {
      window.localStorage.jwt = jwt["jwt"];
      console.log(localStorage.getItem("jwt"));
      return jwt;
    }));
  }

  getUser() {
    this.http.get<any>(this.baseUrl + '/getuserfromtoken', {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    }).subscribe(
      response => {
        this.user_id = response.id,
          this.user_role = response.role,
          //LOCAL STORAGE
          window.localStorage.user_id = response.id,
          window.localStorage.user_role = response.role,
          console.log("ID : " + localStorage.user_id),
          console.log("ROLE : " + localStorage.user_role)
        console.log("Role in login compo : " + localStorage.user_role);
        if (localStorage.user_role === 'SELLER') {
          setTimeout(() => {
            this.router.navigateByUrl('/sellerhome');
          }, 1000);
        } else {
          setTimeout(() => {
            this.router.navigateByUrl('/buyerhome');
          }, 1000);
        }
      }
    );
  }

  getUserById() {
    return this.http.get<User>(this.baseUrl + '/' + localStorage.user_id, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  isUserLoggedIn(): boolean {
    let flag = true;
    if (window.localStorage.getItem("userDtls") === null)
      flag = false;
    console.log(`flag=${flag}`);
    return flag;
  }

  updatePhone(phoneNumber: String) {
    const userId = window.localStorage.user_id;
    return this.http.put(
      this.baseUrl + `/changephone/${userId}/${phoneNumber}`, null,
      {
        headers: new HttpHeaders({
          'Authorization': "Bearer " + window.localStorage.getItem("jwt")
        })
      }
    );
  }

  changeEmail(email: string) {
    const userId = window.localStorage.user_id;
    return this.http.put(
      this.baseUrl + `/changeemail/${userId}/${email}`, null,
      {
        headers: new HttpHeaders({
          'Authorization': "Bearer " + window.localStorage.getItem("jwt")
        })
      }
    );
  }

  updatePassword(oldPassword: string, newPassword: string) {
    const request = new UpdatePasswordRequest(parseInt(window.localStorage.getItem('user_id')), oldPassword, newPassword);
    return this.http.put<any>(
      this.baseUrl + `/updatepassword`, request,
      {
        headers: new HttpHeaders({
          'Authorization': "Bearer " + window.localStorage.getItem("jwt")
        })
      }
    );
  }

  changePassword(password: string) {
    const request = new ChangePasswordRequest(window.sessionStorage.getItem('email'), password);
    window.sessionStorage.clear();

    return this.http.put(
      this.baseUrl + `/changepassword`, request, {});
  }

  forgotPassword(email: string, dob: Date) {
    return this.http.post(
      this.baseUrl + `/forgotpassword/${email}/${dob}`, null);
  }
}