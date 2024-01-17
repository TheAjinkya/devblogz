import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../state/counter.reducer';
import { ProductComponent } from './product/product.component';
import { addProductReducer } from './product/product.reducer';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ProductComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ product: addProductReducer }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
