import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat, Observable } from 'rxjs';
import Shop from '../models/shop.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShopsService {
  private url: string = "https://localhost:44300/api";
  
  constructor(private http: HttpClient) { }

  public getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url + "/shops");
  }

  public getShop(id: number): Observable<Shop>{
    return this.http.get<Shop>(this.url + "/shops/" + id);
  }

  public addNewShop(shop: Shop): Observable<Shop> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(shop);
    
    return this.http.post(this.url + "/shops", body, {'headers': headers});
  }
}
