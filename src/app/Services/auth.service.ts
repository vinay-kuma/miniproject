import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   baseUrl:string = 'https://localhost:7048/';
  constructor(private http : HttpClient) { }

  // signUp(userObj:any){
  //   return this.http.post<any>(this.baseUrl + 'api/register', userObj);
  // }

  // login(loginObj:any){
  //   return this.http.post<any>('${this.baseUrl}authenticate', loginObj);
  // }


  signUp(userObj:any) : Observable<any>{
    return this.http.post<any>(this.baseUrl + 'api/register', userObj);
  }

  login(loginObj:any){
    return this.http.post<any>(this.baseUrl + 'api/authenticate', loginObj);
  }
}
// '${this.baseUrl}register'