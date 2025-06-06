import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-action-button',
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css',
  standalone: true,
})
export class ActionButtonComponent {
  readonly title = input('Execute');
  readonly isLoading = signal(false);
  readonly actionRequested = output<boolean>();

  constructor() {

  }

  executeAction() {
    this.isLoading.set(true);

    // Simular un delay de 1,5 segundos
    setTimeout(() => {
      this.actionRequested.emit(true);
      this.isLoading.set(false);
    }, 1500);
  }
}
