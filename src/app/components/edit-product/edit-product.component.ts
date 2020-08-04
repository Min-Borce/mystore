import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

interface productInterface {
  id: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @Output() closeEditPopup = new EventEmitter<boolean>();
  @Output() editProducts = new EventEmitter<object>();
  @Input() forEdit;

  editProduct: productInterface;
  constructor() { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.editProduct = { id: this.forEdit.id, name: this.forEdit.name, price: this.forEdit.price };
  }
  close() {
    this.closeEditPopup.emit(false);
  }
  update() {
    this.editProducts.emit(this.editProduct);
    this.close();
  }
}
