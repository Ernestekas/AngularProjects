import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/models/product.model';
import Shop from 'src/app/models/shop.model';
import { ProductsService } from 'src/app/services/products.service';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  displayStyle = "none";

  public id? : number = 0;
  public name : string = '';
  public shop: Shop = {};

  public newProduct : Product = {
    name: "",
    shopId: 0,
    price: 0
  }

  public oldProductName : string = "";
  public selectedProduct : Product = {
    id: 0,
    name: "",
    shopId: 0,
    price: 0
  }
  public allShops : Shop[] = [];
  public selectedShop : Shop = {};

  constructor(
    private _shopService : ShopsService, 
    private _route : ActivatedRoute,
    private _productsService : ProductsService
    ) {}

  ngOnInit(): void {
    this.id = parseInt(this._route.snapshot.paramMap.get("id") as string);
    this.getById();
    this._shopService.getAllShops().subscribe((shops) => {
      this.allShops = shops;
    });
  }

  private getById() {
    this._shopService.getShop(this.id!).subscribe((shop) => {
      this.shop = this.selectedShop = shop;
      this.newProduct.shopId = this.shop.id!;
    });
  }

  public toggleChangeName() : void {
    let textBox = document.getElementById("name");
    let submitButton = document.getElementById("submitNameChange");
    let disabledAttributeExists = submitButton?.getAttribute("disabled");

    if(disabledAttributeExists){
      submitButton?.removeAttribute("disabled");
      textBox?.removeAttribute("disabled");
    }
    else{
      this.name = this.shop.name!;
      submitButton?.setAttribute("disabled", "disabled");
      textBox?.setAttribute("disabled", "disabled");
    }
  }

  public submitNameChange() : void{
    this.shop.name = this.name;
    this._shopService.update(this.shop).subscribe();
    this.toggleChangeName();
  }

  public createProduct() : void {
    this._productsService.addNew(this.newProduct).subscribe((product) => {
      this.shop.products?.push(product);
      this.clearInputs();
    });
  }

  public removeProduct(id : number) : void {
    this._productsService.delete(id).subscribe();
    this.shop.products = this.shop.products?.filter(product => product.id != id);
  }

  public submitUpdate() : void {
    this.selectedProduct.shopId = this.selectedShop.id!;
    this.closePopup();
    this._productsService.update(this.selectedProduct).subscribe(() => {
      window.location.reload();
    });
  }

  public clearInputs() : void {
    this.newProduct.name = "";
    this.newProduct.price = 0;
  }

  public openPopup(product : Product) {
    this.selectedProduct = product;
    this.oldProductName = this.selectedProduct.name;
    this.selectedShop = this.allShops.filter(shop => shop.id === product.shopId)[0];
    this.displayStyle = "block";
  }

  public closePopup() {
    this.displayStyle = "none";
    this.clearInputs();
  }
}
