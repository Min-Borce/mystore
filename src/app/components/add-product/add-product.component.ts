import { Component, OnInit, Output, EventEmitter,   Inject } from '@angular/core';
// import { ProductsInterface } from 'src/app/model/products';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatPaginator } from '@angular/material';
import {  BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Output() closePopup = new  EventEmitter<boolean>();
  @Output() addProduct = new  EventEmitter<object>();
  newProduct = {id: '' , name: '', price: ''};

  constructor() {}

  ngOnInit() {

  }

  close() {
    this.closePopup.emit(false);
  }

save() {
  this.newProduct.id = Math.random().toString();
  this.addProduct.emit(this.newProduct);
  this.close();
}

}
