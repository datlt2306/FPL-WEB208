import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    {
        path: 'admin', component: LayoutAdminComponent, children: [
            { path: 'products', component: ProductListComponent }
        ]
    }
];
