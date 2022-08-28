import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessegeComponent } from './common/components/messege/messege.component';
import { DisplayPageComponent } from './common/components/display-page/display-page.component';

const routes: Routes = [
  {
    path:'',component:DisplayPageComponent
  },
  {
    path:'chat',component:MessegeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
