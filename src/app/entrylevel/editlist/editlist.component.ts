import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.scss']
})
export class EditlistComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  Email: any;
  username: any;
  address: any;
  gender: any;
  city: any;
  last_name: any;
  first_name: any;
  id: any;
  Gender: any = [  {
    "name": "Male",
 
    },
    {
    "name": "Female",
   
    },
    {
    "name": "Other",
   
    },
  ]
  constructor(public dialogRef: MatDialogRef<EditlistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    public toastr: ToastrService,
    public dataservice: DataService,

    private formBuilder: FormBuilder,
    private router: Router,
    private routeTo: Router,
  
   
    ) { 
      console.log(this.data)
      this.Email=this.data['data']['email']
      this.first_name=this.data['data']['first_name']
      this.last_name=this.data['data']['last_name']
      this.city=this.data['data']['city']
      this.gender=this.data['data']['gender']
      this.address=this.data['data']['address']
      this.username=this.data['data']['username']
      this.id=this.data.id
      console.log(this.id)


    }

  
  ngOnInit(): void {
    this.createForm();

  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'first_name':['', Validators.required],
    'last_name':['', Validators.required],
    'username':['', Validators.required],
    'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    'address':['', Validators.required],
    'gender':['', Validators.required],
    'city':['', Validators.required],

    });
    this.loginForm.patchValue(this.data);

  }
  closeModelBox(): void {
    this.dialogRef.close();
  }
  get loginFormControl(){
    return this.loginForm.controls;
  }
  
  onSubmit(){
    debugger
    this.dataservice.editUser(this.id,this.loginForm.value);
    this.toastr.success('Customer Updated', '', {
      positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
    });
    this.dialogRef.close();
  }
  
}
