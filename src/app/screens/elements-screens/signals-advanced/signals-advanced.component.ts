import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, signal, effect, EffectRef, Signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";
import { IProduct } from '../../../interfaces/product.interface';
import { LocalProductsService } from '../../../services/local_products.service';

@Component({
  selector: 'app-signals-advanced',
  imports: [FormsModule, CurrencyPipe, DatePipe, GoBackButtonComponent],
  templateUrl: './signals-advanced.component.html',
  styleUrl: './signals-advanced.component.css',
  standalone: true,
})
export class SignalsAdvancedComponent {
  private productService: LocalProductsService = inject(LocalProductsService);

  readonly filter = signal('');
  readonly outOfStock = signal(false);
  readonly products = signal(this.productService.products);

  readonly existingProducts: Signal<IProduct[]> = computed(() => this.products().filter(p => p.quantity > 0));

  readonly filteredProducts = computed(() => {
    const searchTerm = this.filter().toLowerCase();

    return this.products().filter(p => {
      let name = p.name.toLowerCase()

      if (!this.outOfStock()) {
        return name.includes(searchTerm) && p.quantity > 0;
      }

      return name.includes(searchTerm);
    });
  });

  constructor() {
    effect(() => {
      console.log(`Filter is: ${this.filter()}`);

      if (this.filter() === 'KO') {
        alert('KO received!');
      }
    });
  }

  updateFilter(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const newValue = input.value;

    this.filter.set(newValue);
  }

  updateExists(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const newValue = input.checked;

    this.outOfStock.set(newValue);
  }
}
