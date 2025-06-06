import { Component, signal } from '@angular/core';
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";
import { ActionButtonComponent } from "../../../components/action-button/action-button.component";
import { ConfirmDialogComponent } from "../../../components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-input-output',
  imports: [GoBackButtonComponent, ActionButtonComponent, ConfirmDialogComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
  standalone: true
})
export class InputOutputComponent {
  counter = signal(0);
  actionTitle = signal("Ejecutar");

  showDialog = signal(false);
  result = signal<boolean | null>(null);

  onUserChooseOption(value: boolean) {
    this.result.set(value);
    this.showDialog.set(false); // ocultar el diálogo
  }

  showDialogConfirmation() {
    this.showDialog.set(true)
  }


  handleRequest(value: boolean) {
    if (value) {
      this.counter.update(value => ++value);
    }

    console.log(`Received ${value}`);
  }
}
