import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private apiUrl = 'http://localhost:3000/api/search';

    constructor(private http: HttpClient) { }

    search(query: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}?q=${query}`).pipe(
            catchError(() => of([]))
        );
    }
}
