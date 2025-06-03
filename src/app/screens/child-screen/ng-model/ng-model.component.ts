import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-ng-model',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-model.component.html',
  styleUrl: './ng-model.component.css'
})
export class NgModelComponent {
  product: Product = {
    name: '',
    price: 0,
    createdAt: new Date(),
    quantity: 0
  };

  submitProduct() {
    console.log('Producto creado:', this.product);
    // maybe we can call an API here using the product that just have been created via form
  }

}
