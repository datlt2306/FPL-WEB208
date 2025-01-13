import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { ProductAddComponent } from './product-add/product-add.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: 'admin', component: LayoutAdminComponent, children: [
            { path: 'products', component: ProductListComponent },
            { path: 'products/add', component: ProductAddComponent }
        ]
    }
];
