import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpserviceService } from 'src/app/httpservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 ProductHeader = [{ name: 'Hp' }, { name: 'Dell'}, { name: 'Lenovo' }];  
  data:any;
 ProductDetails: object = [];  

  constructor(private service: HttpserviceService,private router: Router,    public toastr: ToastrService,) {

    this.service.getJSON().subscribe((res) => {
      console.log(res['data']) 
           
    this.data=res['data']
    })
  
    this.getProducts();  
  }  
  getProducts() {  
    console.log("getProducts");  
    return this.ProductHeader;  
}  


SearchProduct(name: string) {  

    let obj = this.data.filter(m => m.Name == name);  
    this.ProductDetails = obj;  
    return this.ProductDetails;  
}
logout() {
  debugger
  localStorage.clear()

 this.toastr.success("Logout Success", '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        this.router.navigateByUrl('/entrylevel/login')

}
  ngOnInit(): void {
 
  }
}
