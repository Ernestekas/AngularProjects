import { Component, OnInit } from '@angular/core';
import Shop from 'src/app/models/shop.model';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public shop: Shop = {};
  private shopService? : ShopsService;

  constructor(shopService : ShopsService) {
    this.shopService = shopService;
  }

  ngOnInit(): void {
  }

  
}
