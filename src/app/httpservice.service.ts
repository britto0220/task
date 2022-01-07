import { Injectable } from '@angular/core';
import {  EventEmitter, Output } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
// import { ToastrService } from "ngx-toastr";
// import { map } from "rxjs/operators";
import * as pako from "pako";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {


  headers: any = new HttpHeaders({ "Content-Type": "application/json" });
 
 
      constructor(
      public http: HttpClient,
      public router: Router,
  
    ) {
      
  } 
   getJSON() {
    return this.http.get("https://mocki.io/v1/b0b7d755-55c6-4bc9-bff3-0474a8a118ac");
                   

}
// createProducts(product){
//   return this.http.post("http://localhost:3000/products",product)
// }
// getList(){
//   return this.http.get("http://localhost:3000/products")

// }
// updateProduct(product){
//   debugger
//   return this.http.put("http://localhost:3000/products" +'/'+ product.id, product)
// }
// deleteproduct(product){
//   debugger
//   return this.http.delete("http://localhost:3000/products"+'/'+ product)

// }
}
