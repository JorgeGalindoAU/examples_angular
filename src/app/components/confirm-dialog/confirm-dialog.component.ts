import { Component, output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  imports: [],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
  standalone: true,
})
export class ConfirmDialogComponent {
  readonly choose = output<boolean>();

  confirm() {
    this.choose.emit(true);
  }

  cancel() {
    this.choose.emit(false);
  }
}
