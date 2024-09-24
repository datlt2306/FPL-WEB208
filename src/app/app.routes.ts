import { Routes } from '@angular/router';
import { LayoutWebsiteComponent } from './layouts/layout-website/layout-website.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { AdminProductsPageComponent } from './pages/admin/admin-products-page/admin-products-page.component';

export const routes: Routes = [
    {
        path: "", component: LayoutWebsiteComponent, children: [
            { path: "", component: HomeComponent },
            { path: "about", component: AboutComponent }
        ]
    },
    {
        path: "admin", component: LayoutAdminComponent, children: [
            { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
            { path: "dashboard", component: DashboardPageComponent },
            { path: "products", component: AdminProductsPageComponent },
        ]
    },
    { path: "**", component: NotFoundComponent }
];
