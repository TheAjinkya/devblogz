import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ADD_PRODUCT, DELETE_PRODUCT } from './product.reducer';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<any>) {
    this.products = this.store.select((state) => state.product);
    this.products.subscribe((response) => {
      console.log('Products response', response);
    });
  }

  ngOnInit(): void {}

  demo(name: any, price: any) {
    console.log(name, price);
  }

  addProduct = (name: any, price: any) => {
    let uuid = UUID.UUID();
    this.store.dispatch({
      type: ADD_PRODUCT,
      payload: <Product>{
        id: uuid,
        name: name,
        price: price,
      },
    });
  };

  removeProduct = (id: any) => {
    console.log("id", id)
    this.store.dispatch({
      type: DELETE_PRODUCT,
      payload: <Product>{
        id: id,
      },
    });
  };
}
