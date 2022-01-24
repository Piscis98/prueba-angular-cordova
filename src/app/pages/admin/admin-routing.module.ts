import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserCarouselComponent } from 'src/app/components/users/list-user-carousel/list-user-carousel.component';
import { ListUserDefaultComponent } from 'src/app/components/users/list-user-default/list-user-default.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', 
  component: AdminComponent, 
  children:[
  {path:'list-user-default', component:ListUserDefaultComponent},
  {path:'list-user-carousel', component:ListUserCarouselComponent},
  {path:'', redirectTo:'list-user-default', pathMatch:'full'}
] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
