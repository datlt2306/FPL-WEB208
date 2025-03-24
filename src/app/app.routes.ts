import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

export const routes: Routes = [
    {
        path: 'admin', component: LayoutAdminComponent, children: [
            { path: 'products', component: ProductListComponent },
            { path: 'products/add', component: ProductAddComponent },
            { path: 'products/edit/:id', component: ProductEditComponent }
        ]
    }
];
