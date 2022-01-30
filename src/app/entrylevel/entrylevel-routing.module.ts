import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewItemComponent } from './view-item/view-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: SignComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'view', component: ViewItemComponent },

 

];

@NgModule({
  imports: [
   
    CommonModule,   
    ReactiveFormsModule,
    FormsModule,
    
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class EntrylevelRoutingModule { }
