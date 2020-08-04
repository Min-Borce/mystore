import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Output() closePopup = new EventEmitter<boolean>();
  @Output() addProduct = new EventEmitter<object>();
  newProduct = { id: '', name: '', price: '' };

  constructor() { }

  ngOnInit() { }

  close() {
    this.closePopup.emit(false);
  }

  save() {
    this.newProduct.id = Math.random().toString();
    this.addProduct.emit(this.newProduct);
    this.close();
  }

}
