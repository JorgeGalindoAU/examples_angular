import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../../interfaces/product.interface';
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";

@Component({
  selector: 'app-ng-model',
  imports: [CommonModule, FormsModule, GoBackButtonComponent],
  templateUrl: './ng-model.component.html',
  styleUrl: './ng-model.component.css',
  standalone: true,
})
export class NgModelComponent {
  product: IProduct = {
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
