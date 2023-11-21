import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  saveUserDetails(data:any): Observable<any>{
    return this.http.post('http://localhost:8080/demoSample/myAppSample/add',data);
  //  return this.http.get(?data='+data);
  }


  checkLogin(userEmail:string,userPassword:string): Observable<any>{
    return this.http.post('http://localhost:8080/demoSample/myAppSample/checkLogin',{'userEmail':userEmail,'userPassword':userPassword});
  }

}
