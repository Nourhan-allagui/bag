import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import {MatTableModule} from '@angular/material/table';
import {FeatureComponent} from './feature/feature.component';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    FeatureComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
