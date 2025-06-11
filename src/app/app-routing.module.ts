import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  // { path: 'shop', component: ShopComponent },
  // { path: 'features', component: FeaturesComponent },
  // { path: 'blog', component: BlogComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
