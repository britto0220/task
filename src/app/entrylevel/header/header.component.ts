import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,    public toastr: ToastrService,) { 

  }

  ngOnInit(): void {
  }
logout() {
  localStorage.clear()

 this.toastr.success("Logout Success", '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        this.router.navigateByUrl('/entrylevel/login')

}
}
