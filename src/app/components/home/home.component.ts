import { ProductsStateService } from './../../services/products-state.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/products';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText;
  products: Product[];

  constructor(
    private productState: ProductsStateService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.products = this.productState.getProducts();
  }

  navigateToAdmin() {
    this._router.navigate(['products']);
  }
}
