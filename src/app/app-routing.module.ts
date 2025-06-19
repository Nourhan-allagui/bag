import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {FeatureComponent} from './feature/feature.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'shop', component: ShopComponent },
   { path: 'features', component: FeatureComponent },
  // { path: 'blog', component: BlogComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
