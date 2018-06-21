import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { IDFormComponent } from './subforms/id-form/id-form.component';
import { UserFormComponent } from './subforms/user-form/user-form.component';
import { HardSoftFormComponent } from './subforms/hard-soft-form/hard-soft-form.component';
import { PCardFormComponent } from './subforms/pcard-form/pcard-form.component';
import { FuelFormComponent } from './subforms/fuel-form/fuel-form.component';
import { SAPFormComponent } from './subforms/sap-form/sap-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
    DepartmentComponent,
    UserLoginComponent,
    IDFormComponent,
    UserFormComponent,
    HardSoftFormComponent,
    PCardFormComponent,
    FuelFormComponent,
    SAPFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
