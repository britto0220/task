import { CommonModule } from '@angular/common';
import { SignComponent } from './sign/sign.component';
import { EntrylevelRoutingModule } from './entrylevel-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { EditlistComponent } from './editlist/editlist.component';
import { NewcusComponent } from './newcus/newcus.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// export {
//   NgbNavChangeEvent,
//   NgbNavConfig,
//   NgbNav,
//   NgbNavContent,
//   NgbNavContentContext,
//   NgbNavItem,
//   NgbNavLink,
//   NgbNavModule,
//   NgbNavOutlet,
//   NgbNavPane
// } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SignComponent,
    DashboardComponent,
    ViewItemComponent, 
       FooterComponent,
    HeaderComponent,
    EditlistComponent,
    NewcusComponent,
  ],
  imports: [
    CommonModule,
    // MatDialog,
    EntrylevelRoutingModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    NgbModule,
    NgbNavModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
    

  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class EntrylevelModule { }
