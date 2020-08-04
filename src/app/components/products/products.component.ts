import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { ProductsStateService } from 'src/app/services/products-state.service';
import { Product } from 'src/app/model/products';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { AddProductComponent } from '../add-product/add-product.component';


// interface Product {
//   id: string;
//   name: string;
//   price: number;
// }

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  name;
  price;


  isPopupOpen: boolean = false;
  isPopupEditOpen: boolean = false;
  forEditProduct: any;
  products: Product[];

  constructor(
    private productState: ProductsStateService,
  ) { }
  ngOnInit() {
    this.products = this.productState.getProducts();
  }

  addProduct() {
    this.isPopupOpen = this.isPopupOpen ? this.isPopupOpen : !this.isPopupOpen;
  }

  closePopUp(event) {
    this.isPopupOpen = event;
  }

  closeEditPopUp(event) {
    this.isPopupEditOpen = event;
  }
  addNewProduct(product) {
    this.products.unshift(product);
  }
  getProduct(product) {
    this.products.filter(p => p.id === product.id).map(val => {
      val.name = product.name;
      val.price = product.price;
    });
  }
  editProduct(product) {
    this.forEditProduct = product;
    this.isPopupEditOpen = this.isPopupEditOpen ? this.isPopupEditOpen : !this.isPopupEditOpen;
  }
}
