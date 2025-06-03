import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
})
export class SignalsComponent {
  counter = signal<number>(0);
  isCalculating = signal<boolean>(false);
  isFive = computed<boolean>(() => {
    return this.counter() == 5;
  });

  constructor() {
    console.log(`Counter value: ${this.counter}`);
  }

  increment() {
    this.isCalculating.set(true);

    setTimeout(() => {
      this.counter.update(v => ++v);
      this.isCalculating.set(false);
    }, 1000);
  }

  decrement() {
    this.isCalculating.set(true);

    setTimeout(() => {
      this.counter.update(v => --v);
      this.isCalculating.set(false);
    }, 1000);
  }
}
