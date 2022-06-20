import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SalesComponent } from './sales/sales.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [

  { path: 'register', component:RegistrationFormComponent},
  { path: 'login', component:LoginFormComponent},
  { path: 'admin',component:AdminComponent,
    children: [
    { path:'',component:DashboardComponent},
    { path:'dashboard',component:DashboardComponent},
    { path:'analytics',component:AnalyticsComponent},
    { path:'messages',component:MessagesComponent},
    { path: 'members',component:MembersComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'sales', component: SalesComponent },
    { path: 'search', component: SearchResultsComponent },
  ]
    
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
 
  { path: '**', redirectTo: 'login' },
  
 

];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationFormComponent,LoginFormComponent,DashboardComponent,AnalyticsComponent,ProductsComponent,MembersComponent,MessagesComponent,SalesComponent]
