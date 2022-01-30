import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newcus',
  templateUrl: './newcus.component.html',
  styleUrls: ['./newcus.component.scss']
})
export class NewcusComponent implements OnInit {

public loginForm: FormGroup;
submitted = false;
  emailid :any;
  errorCount: number;
  userId: any;
  gender: any = ['Male', 'Female','Other']

constructor(public dialogRef: MatDialogRef<NewcusComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  
  public toastr: ToastrService,

  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private routeTo: Router,
  public dataservice: DataService,


) {


 }

ngOnInit(): void {
  this.createForm();
 
}
closeModelBox(): void {
  this.dialogRef.close();
}



get loginFormControl(){
  return this.loginForm.controls;
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
  
}
onSubmit(){
  
  this.dataservice.addUser(this.loginForm.value);
  this.toastr.success('Customer Created', '', {
    positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
  });
  this.dialogRef.close();
  
}
}
