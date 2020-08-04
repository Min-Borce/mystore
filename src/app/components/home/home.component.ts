import { ProductsStateService } from './../../services/products-state.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/products';



// interface allProducts {
//   id: string;
//   name: string;
//   price: number;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];

  constructor(
    private productState: ProductsStateService,
  ) { }

  ngOnInit() {
     this.products = this.productState.getProducts()
  }


}
