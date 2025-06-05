import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, signal, effect, EffectRef, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";
import { Product } from '../../../interfaces/product.interface';
import { toObservable } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-observable-advanced',
  imports: [FormsModule, CurrencyPipe, DatePipe, GoBackButtonComponent],
  templateUrl: './observable-advanced.component.html',
  styleUrl: './observable-advanced.component.css',
  standalone: true,
})
export class ObservableAdvancedComponent {
  readonly filter = signal('');
  readonly debouncedFilter = signal('');
  readonly outOfStock = signal(false);
  readonly products = signal([
    { name: 'Laptop', price: 999.99, createdAt: new Date(2024, 5, 1), quantity: 10 },
    { name: 'Smartphone', price: 499.99, createdAt: new Date(2024, 4, 15), quantity: 25 },
    { name: 'Monitor', price: 199.99, createdAt: new Date(2024, 3, 10), quantity: 0 },
    { name: 'Teclado', price: 49.99, createdAt: new Date(2024, 2, 5), quantity: 50 }
  ]);

  readonly existingProducts: Signal<Product[]> = computed(() => this.products().filter(p => p.quantity > 0));

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

    effect(() => {
      console.log(`Filter Debounced is: ${this.debouncedFilter()}`);
    });

    // Using debounce along signals
    toObservable(this.filter)
      .pipe(debounceTime(300))
      .subscribe(value => this.debouncedFilter.set(value));
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
