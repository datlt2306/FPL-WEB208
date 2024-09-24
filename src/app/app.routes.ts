import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminProductsPageComponent } from './pages/admin/admin-products-page/admin-products-page.component';
import { LayoutWebsiteComponent } from './layouts/layout-website/layout-website.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: '', component: LayoutWebsiteComponent, children: [
            { path: "", component: HomeComponent },
            { path: "about", component: AboutComponent },
        ]
    },
    { path: 'admin', component: LayoutAdminComponent },
];
