import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Shop from 'src/app/models/shop.model';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  public id? : number = 0;
  public name : string = '';
  public shop: Shop = {};

  constructor(private _shopService : ShopsService, private _route : ActivatedRoute) {}

  ngOnInit(): void {
    this.id = parseInt(this._route.snapshot.paramMap.get("id") as string);
    this.getById();
  }

  private getById() {
    this._shopService.getShop(this.id!).subscribe((shop) => {
      this.shop = shop
    });
  }

  public toggleChangeName() {
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

  public submitNameChange() {
    this.shop.name = this.name;
    this._shopService.update(this.shop).subscribe();
    this.toggleChangeName();
  }
}
