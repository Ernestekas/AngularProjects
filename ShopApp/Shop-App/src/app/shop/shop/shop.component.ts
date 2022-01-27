import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  title = 'All Shops';
  private data: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    const url = 'https://localhost:44300/api/Shops'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
}
