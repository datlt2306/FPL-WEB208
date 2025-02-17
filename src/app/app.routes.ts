import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { LayoutWebsiteComponent } from './components/layouts/layout-website/layout-website.component';
import { ShopComponent } from './pages/shop/shop.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { WhyComponent } from './pages/why/why.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {
        path: "", component: LayoutWebsiteComponent, children: [
            { path: "", component: HomeComponent },
            { path: "shop", component: ShopComponent },
            { path: "testimonial", component: TestimonialComponent },
            { path: "why", component: WhyComponent },
            { path: "contact", component: ContactComponent },
            { path: "product/:id", component: ProductDetailComponent },
            { path: "signup", component: SignupComponent },
        ]
    },
    {
        path: 'admin', component: LayoutAdminComponent, children: [
            { path: 'products', component: ProductListComponent },
            { path: 'products/add', component: ProductAddComponent },
            { path: 'products/:id/edit', component: ProductEditComponent }
        ]
    }
];
