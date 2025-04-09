import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

interface AnalyticsData {
    totalUsers: number;
    activeUsers: number;
    totalSales: number;
    revenue: number;
    chart: any;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    analyticsData: AnalyticsData | null = null;
    loading = true;
    error = '';

    constructor(private dashboardService: DashboardService) { }

    ngOnInit(): void {
        this.loadAnalytics();
    }

    loadAnalytics(): void {
        this.dashboardService.getAnalytics().subscribe({
            next: (data) => {
                this.analyticsData = data;
                this.loading = false;
            },
            error: (err) => {
                this.error = 'Failed to load dashboard data';
                this.loading = false;
            }
        });
    }
}
