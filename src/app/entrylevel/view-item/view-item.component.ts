import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {
  from: FormGroup
  submitted = false;
  Product1 = ['1', '2', '3', '4', '5']
  stock1 = ['Out of stock', 'In stock']
  title: any;
  price: any;
  allproduct: Object;
  id: any;
  Qunatity: any;
  description: any;
  img: any;
  des: any;
  cat: any;
  counter: number=0;
  Email: any;
  first_name: any;
  last_name: any;
  city: any;
  gender: any;
  address: any;
  username: any;

  constructor(public dialogRef: MatDialogRef<ViewItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    public toastr: ToastrService,
  
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public dataservice: DataService,
   
  ) {
  
    console.log(this.data)
    this.Email=this.data['data']['email']
    this.first_name=this.data['data']['first_name']
    this.last_name=this.data['data']['last_name']
    this.city=this.data['data']['city']
    this.gender=this.data['data']['gender']
    this.address=this.data['data']['address']
    this.username=this.data['data']['username']
    
  }

  ngOnInit(): void {
  

  }


  closeModelBox(): void {
    this.dialogRef.close();
 
  }
}
