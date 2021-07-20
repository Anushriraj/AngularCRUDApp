import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/products/category';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {

  }

}
