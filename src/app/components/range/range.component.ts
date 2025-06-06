import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-range',
  imports: [],
  templateUrl: './range.component.html',
  styleUrl: './range.component.css',
  standalone: true,
})
export class RangeComponent {
  readonly title = input('Título de ejemplo');
  readonly valueRange = signal(0);
  readonly valueChanged = output<number>();

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = Number(input.value);

    // seteamos la signal local para sincronizar el componente hijo con el nuevo valor que emitiremos al padre
    this.valueRange.set(newValue);

    // emitimos el nuevo valor del componente hijo hacia el padre
    this.valueChanged.emit(newValue);
  }

}
