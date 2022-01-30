import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PasswordserviceService } from 'src/app/passwordservice.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  form: FormGroup;
  username: object
  constructor(private formBuilder: FormBuilder, private router: Router,    public toastr: ToastrService,
    ) {
    this.form = this.formBuilder.group({
      'email': ['admin@test.com', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['Admin123!', Validators.compose([
        Validators.required, Validators.minLength(8), PasswordserviceService])],
      
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    //debugger
      if (this.form.value.email == "admin@test.com" && this.form.value.password == "Admin123!") {
        localStorage.setItem("user", JSON.stringify('admin@test.com'));
        this.toastr.success("Login Success", '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        this.router.navigateByUrl('/entrylevel/dash');
      } else if ((this.form.value.email == "admin@test.com" && this.form.value.password != "Admin123!")||(this.form.value.email != "admin@test.com" && this.form.value.password == "Admin123!")){
        this.toastr.error("Invalid login details", '', {
          positionClass: 'toast-top-right', closeButton: true, timeOut: 5000
        });
      }else if (this.form.value.email == "" && this.form.value.password == ""){
        this.toastr.error("Please Enter All Details", '', {
          positionClass: 'toast-top-right', closeButton: true, timeOut: 5000
        });
      }
    
  }
}
