import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { Login1Component } from './login1/login1.component';
import { Signup1Component } from './signup1/signup1.component';
import{HttpClientModule} from'@angular/common/http';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component'
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
// import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OrderComponent,
    ProductComponent,
    CustomerComponent,
    Login1Component,
    Signup1Component,
    LifecycleComponent,
    PipesComponent,
    AngularmaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
