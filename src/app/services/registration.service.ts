import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  //url:string ="http://127.0.0.1:5000/api/userinfo";
  //url:string ="http://127.0.0.1:5000/api/";
  url:string ="/api/";
  constructor(private http:HttpClient) { }

  savePost(post: any): Observable<any> {
    console.log("savePost ::"+post);
    return this.http.post<any>(this.url+"userinfo", post, httpOptions);
  }

  login(post: any): Observable<any> {
    console.log("savePost ::"+post);
    return this.http.post<any>(this.url+"login", post, httpOptions);
  }
}
