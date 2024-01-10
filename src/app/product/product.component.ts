import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ADD_PRODUCT } from './product.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<any>) {
    this.products = this.store.select((state) => state.product);
    console.log('Products', this.products);
  }

  ngOnInit(): void {}

  demo(name:any, price:any){
    console.log(name, price)
  }

  addProduct = (name: any, price: any) => {
    this.store.dispatch({
      type: ADD_PRODUCT,
      payload: <Product>{
        name: name,
        price: price
      },
    });
  };
}
