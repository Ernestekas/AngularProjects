import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.model';
import Shop from 'src/app/models/shop.model';
import { ProductsService } from 'src/app/services/products.service';
import { ShopsService } from 'src/app/services/shops.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products : Product[] = [];
  public shops : Shop[] = [];

  public selectedShop : Shop = {};
  public selectedShopId : number = 0;

  constructor(
    private _productsServics : ProductsService, 
    private _shopsService : ShopsService
    ) { }

  ngOnInit(): void {
    this.getAllShops();
    this.getAllProducts();
  }

  private getAllProducts() : void {
    this._productsServics.getAllProducts().subscribe((products) =>{
      this.products = products;
    });
  }

  private getAllShops() : void {
    this._shopsService.getAllShops().subscribe((shops) => {
      this.shops = shops;
    });
  }

  public selectChange() : void {
    this.selectedShopId = this.selectedShop.id!;
    console.log(this.selectedShop.name)
  }
}
