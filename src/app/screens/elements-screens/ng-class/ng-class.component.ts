import { Component, computed, effect, inject, Signal, signal } from '@angular/core';
import { LocalProductsService } from '../../../services/local_products.service';
import { IProduct } from '../../../interfaces/product.interface';
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { GoBackButtonComponent } from '../../../components/go-back-button/go-back-button.component';
import { ActionButtonComponent } from "../../../components/action-button/action-button.component";

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule, CurrencyPipe, UpperCasePipe, DatePipe, GoBackButtonComponent],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css',
  standalone: true
})
export class NgClassComponent {
  private productService: LocalProductsService = inject(LocalProductsService);

  readonly products = signal(this.productService.products);

  constructor() {

  }
}
