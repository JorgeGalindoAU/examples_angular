import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  imports: [],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css',
  standalone: true,
})
export class MainNavbarComponent {
  title: InputSignal<string> = input("Título por defecto (no se verá nunca)");
}
