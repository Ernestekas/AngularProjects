import { Component, OnInit } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';
import Shop from 'src/app/models/shop.model';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.scss']
})
export class ShopsListComponent implements OnInit {
  public shops: Shop[] = [];

  private shopService? :ShopsService;

  constructor(shopService: ShopsService) {
    this.shopService = shopService;
   }

  ngOnInit(): void {
    this.shopService?.getAllShops().subscribe((shops) => {
      Array.prototype.push.apply(this.shops, shops)
    });
  }

  delete(id : number) {
    this.shopService?.remove(id).subscribe();
    this.shops = this.shops.filter(shop => shop.id != id);
  }

  public dontClick(): void {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
  }
}
