import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavigationBarComponent } from './Layout/Navbar/navigation-bar/navigation-bar.component';
import { ShopComponent } from './shop/shop/shop.component';

const routes: Routes = [
  {path: 'Shops/All', component: ShopComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
