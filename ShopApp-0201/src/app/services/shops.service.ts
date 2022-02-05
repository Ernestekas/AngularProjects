import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat, Observable } from 'rxjs';
import Shop from '../models/shop.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShopsService {
  private url: string = "https://localhost:44300/api/shops/";
  
  constructor(private http: HttpClient) { }

  public getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url);
  }

  public getShop(id: number): Observable<Shop>{
    return this.http.get<Shop>(this.url + id);
  }

  public addNewShop(shop: Shop): Observable<any> {
    return this.http.post(this.url, shop);
  }

  public remove(id : number) : Observable<any> {
    return this.http.delete(this.url + id);
  }

  public update(shop : Shop) : Observable<any> {
    let returnString = '"' + shop.name + '"';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }
    
    return this.http.put(this.url + shop.id, returnString, httpOptions);
  }
}
