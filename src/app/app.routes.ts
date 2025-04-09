import { Routes } from '@angular/router';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/admin/products', pathMatch: 'full'
    },
    {
        path: 'admin', component: LayoutAdminComponent, children: [
            { path: 'products', component: ProductListComponent },
            { path: 'products/add', component: ProductAddComponent },
            { path: 'products/edit/:id', component: ProductEditComponent }
        ]
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "register", component: RegisterComponent
    },
    {
        path: '**', redirectTo: '/admin/products'
    }
];
