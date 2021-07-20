import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create-product', component: AddProductComponent },
  { path: 'list-product', component: ViewAllProductComponent },
  { path: 'view-product', component: ViewProductComponent},
  { path: 'search', component: ViewAllProductsByCategoryComponent},
  { path: 'delete-product', component: DeleteProductComponent},
  { path: 'view-product/:id', component: ViewProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
