import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
import { EditlistComponent } from '../editlist/editlist.component';
import { NewcusComponent } from '../newcus/newcus.component';
import { ViewItemComponent } from '../view-item/view-item.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  ProductDetails: object = [];
  showDatafound: boolean = false;
  displayMode: number;
  totalLength: number;
  page: number = 1
  item: any[];

  public ProductHeader = [{ name: 'Hp' }, { name: 'Dell' }, { name: 'Lenovo' }];
  p: number[] = [];
  public Products = [
    { Name: 'Hp', title: 'HP ENVY Laptop - 15t touch', price: '1099', store: 'Best Buy', model: '15-BS013DX' },
    { Name: 'Dell', title: 'Dell Laptop', price: '700', store: 'Amazon', model: 'I7378-3000SLV-PUS' },
    { Name: 'Lenovo', title: 'Lenovo Touch-Screen Laptop', price: '670', store: 'Target', model: '81A40025US' },
    { Name: 'Hp', title: 'HP OfficeJet Pro 6978 All-in-One Printer', price: '100', store: 'Target', model: 'T0F29A#B1H' },
    { Name: 'Hp', title: 'HP Laptop - 17t touch ', price: '420', store: 'Target', model: '1EZ78AV_1' },
    { Name: 'Dell', title: 'Dell - XPS 27" Touch-Screen All-In-One', price: '670', store: 'Target', model: 'BBY-311C3FX' },
    { Name: 'Dell', title: 'Dell - Inspiron 21.5" Touch-Screen All-In-One', price: '469.90', store: 'Target', model: 'I3265-A067BLK-PUS' },
    { Name: 'Lenovo', title: 'Lenovo - 520-24AST 23.8" Touch-Screen All-In-One', price: '679.99', store: 'Target', model: 'F0D3000EUS' },
    { Name: 'Dell', title: 'Dell - XPS 2-in-1 13.3" Touch-Screen Laptop', price: '1199.99', store: 'Target', model: 'XPS9365-7086SLV-PUS' }
  ];
  username: string;
  email: string;
  mobile: any;
  cusdata: any[];
  loginState: any[];
  custdata: any=[];
  // collapsed:boolean= false;
  constructor(
    private router: Router, 
    public dataservice: DataService,
     public dialog: MatDialog,
    public toastr: ToastrService,
    ) {



  }


  ngOnInit(): void {
   this.getuser();

  }
  getuser(){
    this.cusdata=this.dataservice.getUser();
    console.log(this.cusdata)
    // localStorage.setItem("data", JSON.stringify(this.custdata));


  }
  add() {
    const dialogRef = this.dialog.open(NewcusComponent, {
      width: '800px',
      height: '530px',
      // data: { data: userEdit, }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getuser();
    });
  }
  editsymbol(index, data) {
    const dialogRef = this.dialog.open(EditlistComponent, {
      width: '800px',
      height: '530px',
      data: { data: data,
      id:index }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getuser();
    });
  }
  addcus(userdetails) {
    const dialogRef = this.dialog.open(ViewItemComponent, {
      width: '800px',
      height: '530px',
      data: { data: userdetails, }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getuser();
      // this.searchuser();

    });
  }
  onDisplayModeChange(mode: number): void {
    debugger
    this.displayMode = mode;
  }


  //filter product details on name and return productDetails object.
  searchuser() {

    if (this.username == "" && this.email == "") {
      this.ngOnInit();
    } else {
      this.data = this.cusdata.filter(res => {
        const name = res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
       

        return (name );


      })
    }
  }

  // SearchProduct(category) {  
  // this.showDatafound = true;

  //     let obj = this.data.filter(m => m.category == category);  
  //     this.ProductDetails = obj;  
  //     return this.ProductDetails;  
  // }
  logout() {
    //debugger
    localStorage.clear()

    this.toastr.success("Logout Success", '', {
      positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
    });
    this.router.navigateByUrl('/entrylevel/login')

  }
}