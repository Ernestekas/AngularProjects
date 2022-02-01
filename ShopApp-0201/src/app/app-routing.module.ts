import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ShopComponent } from './components/Shop/shop/shop.component';
import { ShopsListComponent } from './components/ShopsList/shops-list/shops-list.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'shops', component: ShopsListComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
