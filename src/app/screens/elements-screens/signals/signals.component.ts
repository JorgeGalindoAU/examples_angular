import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";

@Component({
  selector: 'app-signals',
  imports: [GoBackButtonComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
})
export class SignalsComponent {
  counter: WritableSignal<number> = signal<number>(0);
  isCalculating: WritableSignal<boolean> = signal<boolean>(false);
  isFive: Signal<boolean> = computed<boolean>(() => {
    return this.counter() == 5;
  });

  constructor() {
    console.log(`Counter value: ${this.counter}`);
  }

  increment() {
    this.isCalculating.set(true); // set is used to create a new state

    setTimeout(() => {
      this.counter.update(v => ++v); // update is used to update current state
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
