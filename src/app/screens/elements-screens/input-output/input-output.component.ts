import { Component, signal } from '@angular/core';
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";
import { ActionButtonComponent } from "../../../components/action-button/action-button.component";
import { ConfirmDialogComponent } from "../../../components/confirm-dialog/confirm-dialog.component";
import { RangeComponent } from "../../../components/range/range.component";

@Component({
  selector: 'app-input-output',
  imports: [GoBackButtonComponent, ActionButtonComponent, ConfirmDialogComponent, RangeComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
  standalone: true
})
export class InputOutputComponent {
  counter = signal(0);
  actionTitle = signal("Ejecutar");

  showDialog = signal(false);
  result = signal<boolean | null>(null);

  rangeSelected = signal(0);

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

  onValueChanged(value: number) {
    // recibimos el valor del componente hijo y lo seteamos en nuestra signal local
    this.rangeSelected.set(value);
  }
}
