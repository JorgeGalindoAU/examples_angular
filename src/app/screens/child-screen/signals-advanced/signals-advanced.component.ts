import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, signal, effect, EffectRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";

@Component({
  selector: 'app-signals-advanced',
  imports: [FormsModule, CurrencyPipe, DatePipe, GoBackButtonComponent],
  templateUrl: './signals-advanced.component.html',
  styleUrl: './signals-advanced.component.css'
})
export class SignalsAdvancedComponent {
  filter = signal('');
  products = signal([
    { name: 'Laptop', price: 999.99, createdAt: new Date(2024, 5, 1), quantity: 10 },
    { name: 'Smartphone', price: 499.99, createdAt: new Date(2024, 4, 15), quantity: 25 },
    { name: 'Monitor', price: 199.99, createdAt: new Date(2024, 3, 10), quantity: 7 },
    { name: 'Teclado', price: 49.99, createdAt: new Date(2024, 2, 5), quantity: 50 }
  ]);

  filteredProducts = computed(() => {
    const searchTerm = this.filter().toLowerCase();

    return this.products().filter(p => p.name.toLowerCase().includes(searchTerm));
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
    console.log(event);

    const input: HTMLInputElement = event.target as HTMLInputElement;
    const newValue = input.value;

    this.filter.set(newValue);
  }
}
