import { CommonModule } from '@angular/common';
import { SignComponent } from './sign/sign.component';
import { EntrylevelRoutingModule } from './entrylevel-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SignComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    EntrylevelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
    

  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class EntrylevelModule { }
