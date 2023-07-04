import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseURL = "https://localhost:7216/api/";
  constructor(private httpClient: HttpClient) { }


  getAllList(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseURL}`+'DapperOperations/GetAllAsyncWithQuery');
  }

  getQuotes(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseURL}`+'Quotes/GetAllAsyncWithQuery');
  }
  // createEmployee(employee: any): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`, employee);
  // }

  // getEmployeeById(id: number): Observable<any>{
  //   return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  // }

  // updateEmployee(id: number, employee: any): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  // }

  // deleteEmployee(id: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }

}
