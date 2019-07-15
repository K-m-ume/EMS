import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddnewComponent } from './addnew/addnew.component';
import { EmplistComponent } from './emplist/emplist.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
   {path: 'home', component: HomeComponent},
  {path: 'add', component:AddnewComponent}, 
  {path: 'employees', component: EmplistComponent},
  {path: 'contact', component: ContactComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
