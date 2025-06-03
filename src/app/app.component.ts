import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavbarComponent } from "./components/main-navbar/main-navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'Mi Aplicación de prueba';
}
