import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProductsComponent } from './products/products.component';
import { MessagesComponent } from './messages/messages.component';
import { MembersComponent } from './members/members.component';
import { SalesComponent } from './sales/sales.component';
import { SalesCompareComponent } from './sales-compare/sales-compare.component';
import { ProfitCompareComponent } from './profit-compare/profit-compare.component';
import { ProductCompareComponent } from './product-compare/product-compare.component';
import { ProductTrendsComponent } from './product-trends/product-trends.component';
import { SalesTrendsComponent } from './sales-trends/sales-trends.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ForgotPasswordComponent,
    AdminComponent,
    AnalyticsComponent,
    ProductsComponent,
    MessagesComponent,
    MembersComponent,
    SalesComponent,
    SalesCompareComponent,
    ProfitCompareComponent,
    ProductCompareComponent,
    ProductTrendsComponent,
    SalesTrendsComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
