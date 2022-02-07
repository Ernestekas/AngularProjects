import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = "https://localhost:44300/api/products/";

  constructor(private http: HttpClient) { }

  public getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  public addNew(product : Product) : Observable<any> {
    return this.http.post(this.url, product);
  }

  public delete(id : number) : Observable<any> {
    return this.http.delete(this.url + id);
  }
}
