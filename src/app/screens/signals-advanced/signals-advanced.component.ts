import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals-advanced',
  imports: [FormsModule, CurrencyPipe, DatePipe],
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
}
