import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private apiUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    getAnalytics(): Observable<any> {
        return this.http.get(`${this.apiUrl}/analytics`).pipe(
            catchError(() => {
                // Fallback to mock data if API fails
                return of({
                    totalUsers: 1250,
                    activeUsers: 847,
                    totalSales: 324,
                    revenue: 12570,
                    chart: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        data: [65, 59, 80, 81, 56, 55]
                    }
                });
            })
        );
    }

    getRecentActivity(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/activity`).pipe(
            catchError(() => {
                return of([
                    { id: 1, type: 'purchase', user: 'John Doe', amount: 120, date: new Date() },
                    { id: 2, type: 'review', user: 'Jane Smith', product: 'Laptop XYZ', date: new Date() },
                    { id: 3, type: 'signup', user: 'Robert Johnson', date: new Date() }
                ]);
            })
        );
    }
}
