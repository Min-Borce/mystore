import { Injectable } from '@angular/core';

const products = [
  {
    id: '1',
    name: 'Xiaomi',
    price: 100,
  },
  {
    id: '2',
    name: 'Samsung',
    price: 200,
  },
  {
    id: '3',
    name: 'Nokia',
    price: 150,
  },
  {
    id: '4',
    name: 'iPhone',
    price: 250,
  },
  {
    id: '5',
    name: 'Vox',
    price: 400,
  },
  {
    id: '6',
    name: 'Philips',
    price: 400,
  },
  {
    id: '7',
    name: 'LG',
    price: 350,
  },
  {
    id: '8',
    name: 'Telefunken',
    price: 300,
  },
];


@Injectable({
  providedIn: 'root'
})
export class ProductsStateService {

  getProducts() {
    return products;
  }

  constructor() { }
}
