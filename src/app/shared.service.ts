import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiLink } from './constants/aplinks'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
private url="https://api.printingwarehouses.com/api/v1/";
product : any;

  constructor(private http:HttpClient) { }

  getProducts=( catogery )=> new Promise ((resolve, reject)=>{

    let query = {
      "category":catogery,
      "sub_category":null,
      "keyword":[],
      "color":null,
      "search":"",
      "page":1,
      "type":"graphic_template"
    }

    this.http.post(ApiLink.url + "products/", query).subscribe((response)=>{
    this.product = response
    resolve (this.product.data.products)

    })
  }) 

  listProduct


}
