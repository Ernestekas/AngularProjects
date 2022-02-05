import { Component, OnInit } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';
import Shop from 'src/app/models/shop.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.scss']
})
export class ShopsListComponent implements OnInit {
  public shops: Shop[] = [];

  constructor(private _shopService: ShopsService) {}

  ngOnInit(): void {
    this._shopService.getAllShops().subscribe((shops) => {
      this.shops = shops;
    });
  }

  public delete(id : number) : void {
    this._shopService.remove(id).subscribe();
    this.shops = this.shops.filter(shop => shop.id != id);
  }

  public dontClick(): void {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
  }
}
