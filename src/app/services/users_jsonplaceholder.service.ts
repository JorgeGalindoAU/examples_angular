import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UsersJsonPlaceholderService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';
    private http = inject(HttpClient);

    constructor() { }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.apiUrl);
    }

}
