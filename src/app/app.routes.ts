import { Routes } from '@angular/router';
import { LayoutWebsiteComponent } from './layouts/layout-website/layout-website.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminProductsPageComponent } from './pages/admin-products-page/admin-products-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsAddComponent } from './pages/products-add/products-add.component';
import { ProductsEditComponent } from './pages/products-edit/products-edit.component';

export const routes: Routes = [
    {
        path: "", component: LayoutWebsiteComponent,
        children: [
            { path: "", component: HomeComponent },
            { path: "products", component: ProductsComponent },
            { path: "signup", component: SignupComponent },
            { path: "signin", component: SigninComponent }
        ]
    },
    {
        path: 'admin', component: LayoutAdminComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'products', component: AdminProductsPageComponent },
            { path: 'products/add', component: ProductsAddComponent },
            { path: 'products/:id/edit', component: ProductsEditComponent }
        ]
    },
    { path: "**", component: NotFoundComponent }
];
