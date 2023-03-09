import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface orders{
  product:string;
  payment:string;
  shipping:string
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<orders[]>{
    return this.http.get<orders[]>(`assets/product.json`);
  }
}
