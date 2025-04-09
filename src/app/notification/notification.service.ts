import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface Notification {
    id: number;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    isRead: boolean;
    timestamp: Date;
}

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private apiUrl = 'http://localhost:3000/api/notifications';
    private notificationsSubject = new BehaviorSubject<Notification[]>([]);
    public notifications$ = this.notificationsSubject.asObservable();

    constructor(private http: HttpClient) {
        this.loadNotifications();
    }

    loadNotifications(): void {
        this.http.get<Notification[]>(this.apiUrl).subscribe({
            next: (notifications) => {
                this.notificationsSubject.next(notifications);
            },
            error: () => {
                // Load some sample notifications if API fails
                const sampleNotifications: Notification[] = [
                    {
                        id: 1,
                        message: 'Your order has been shipped',
                        type: 'info',
                        isRead: false,
                        timestamp: new Date()
                    },
                    {
                        id: 2,
                        message: 'Payment successful',
                        type: 'success',
                        isRead: true,
                        timestamp: new Date(Date.now() - 86400000)
                    }
                ];
                this.notificationsSubject.next(sampleNotifications);
            }
        });
    }

    getUnreadCount(): Observable<number> {
        return new Observable<number>(observer => {
            this.notifications$.subscribe(notifications => {
                const count = notifications.filter(n => !n.isRead).length;
                observer.next(count);
            });
        });
    }

    markAsRead(id: number): Observable<Notification> {
        return this.http.patch<Notification>(`${this.apiUrl}/${id}/read`, {}).pipe(
            tap(() => {
                const currentNotifications = this.notificationsSubject.value;
                const updatedNotifications = currentNotifications.map(n =>
                    n.id === id ? { ...n, isRead: true } : n
                );
                this.notificationsSubject.next(updatedNotifications);
            })
        );
    }

    addNotification(notification: Omit<Notification, 'id'>): void {
        // For local testing without API
        const newNotification = {
            ...notification,
            id: Math.floor(Math.random() * 1000)
        };

        const currentNotifications = this.notificationsSubject.value;
        this.notificationsSubject.next([newNotification, ...currentNotifications]);
    }
}
