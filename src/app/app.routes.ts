import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'products', component: ProductListComponent }
];
