import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../models/iclient';
import { ICallDto } from "../models/ICallDto";
import { IClientAdd } from "../models/IClientAdd";


@Injectable({
  providedIn: 'root'
})
export class APIClientsService {

  private baseUrl = 'http://localhost:5161/api/client/Clients';

  constructor(private http: HttpClient) {}

  getClients(pageNumber: number = 1, pageSize: number = 5):Observable<IClient[]> 
  {
    let params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);

    return this.http.get<IClient[]>(this.baseUrl, { params });
  }
  
  getCallsofClient(clientId: number, pageNumber: number = 1, pageSize: number = 5): Observable<ICallDto[]> {
    const url = `http://localhost:5161/api/Calls?clientId=${clientId}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get<ICallDto[]>(url);
  }
  addClient(newClie: IClientAdd): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:5161/api/client/AddClient', JSON.stringify(newClie), { headers });
  }
  }
