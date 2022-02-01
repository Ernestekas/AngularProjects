import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Shop from '../models/shop.model';

@Injectable({
  providedIn: 'root'
})

export class ShopsService {

  constructor(private http: HttpClient) { }

  public getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>("https://localhost:44300/api/shops")
  }
}
