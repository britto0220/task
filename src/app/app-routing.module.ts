import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrylevelModule } from './entrylevel/entrylevel.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrylevel',
    pathMatch: 'full'
  },

  // {
  // //   path: "entrylevel",
  // //   loadChildren: "./entrylevel/entrylevel.module#EntrylevelModule",
  // // },
  // path: "entrylevel",
  //   loadChildren: () => EntrylevelModule
  // },
  {
    path : 'entrylevel', 
    loadChildren: () => import('./entrylevel/entrylevel.module').then(m => m.EntrylevelModule)
  },
 
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

