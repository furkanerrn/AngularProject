import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
import { ListResponseModel } from '../Models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44340/api/products/getall';

  constructor(private httpClient: HttpClient ) 
  {}
  getProducts() :Observable<ListResponseModel<Product>>{
     return this.httpClient 
      .get<ListResponseModel<Product>>(this.apiUrl);
    }
}
