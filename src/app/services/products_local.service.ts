import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalProductsService {

  readonly products: IProduct[] = ([
    { name: 'Ordenador', price: 999.99, createdAt: new Date(2024, 5, 1), quantity: 10 },
    { name: 'Smartphone', price: 499.99, createdAt: new Date(2024, 4, 15), quantity: 25 },
    { name: 'Monitor', price: 199.99, createdAt: new Date(2024, 3, 10), quantity: 0 },
    { name: 'Teclado', price: 49.99, createdAt: new Date(2024, 2, 5), quantity: 50 }
  ]);

  constructor() { }

}
