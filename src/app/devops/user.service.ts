import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "https://localhost:7216/api/";
  constructor(private Client: HttpClient) { }


  IsUserCheck(): Observable<any[]>{
    let params = new HttpParams();
    params = params.append('username', 'val1');
    params = params.append('password', 'val2');

    return this.Client.get<any[]>(`${this.baseURL}`+'Mobileshop/IsUserCheck',{params});
  }


}
