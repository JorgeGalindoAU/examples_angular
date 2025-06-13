import { Component, inject, signal } from '@angular/core';
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";
import { IUser } from '../../../interfaces/user.interface';
import { UsersJsonPlaceholderService } from '../../../services/users_jsonplaceholder.service';

@Component({
  selector: 'app-http',
  imports: [GoBackButtonComponent],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent {
  private usersService = inject(UsersJsonPlaceholderService);

  users = signal<IUser[]>([]);
  loading = signal(true);
  error = signal(false);

  constructor() {
    this.loadUsers();
  }

  private loadUsers() {
    this.loading.set(true);
    this.error.set(false);

    this.usersService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
      complete: () => this.loading.set(false),
    });
  }
}
