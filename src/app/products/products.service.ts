import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(productBody: any): Observable<Product> {
    const productURL = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productURL, productBody);   
   }

  createProduct(productBody: any): Observable<Product> {
   const productURL = 'http://localhost:3000/products';
   return this.httpClient.post<Product>(productURL, productBody);   
  }

  viewProduct(productID: any) {
    const productURL = 'http://localhost:3000/product'+productID;
    return this.httpClient.get(productURL);   
   }

   updateProduct(productBody: any, productID: any): Observable<Product> {
    const productURL = 'http://localhost:3000/product'+productID;
    return this.httpClient.put<Product>(productURL, productBody);   
   }

   deleteProduct(productID: any): Observable<Product> {
    const productURL = 'http://localhost:3000/product'+productID;
    return this.httpClient.delete<Product>(productURL);   
   }

   getCategories() {
    const categoriesURL = 'http://localhost:3000/categories';
    return this.httpClient.get(categoriesURL);   
   }
}
