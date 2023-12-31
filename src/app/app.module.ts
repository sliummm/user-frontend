import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginSharedModule } from 'projects/login/src/app/app.module';
import { ShopSharedModule } from 'projects/shop/src/app/app.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginSharedModule.forRoot(),
    ShopSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
