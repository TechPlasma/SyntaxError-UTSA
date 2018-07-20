import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ViewComponent } from './view/view.component';
import { DefaultInfoComponent } from './subforms/default-info/default-info.component';
import { DefaultViewComponent } from './viewdata/default-view/default-view.component';
import { FuelViewComponent } from './viewdata/fuel-view/fuel-view.component';
import { HardSoftViewComponent } from './viewdata/hard-soft-view/hard-soft-view.component';
import { IDViewComponent } from './viewdata/id-view/id-view.component';
import { PCardViewComponent } from './viewdata/pcard-view/pcard-view.component';
import { SAPViewComponent } from './viewdata/sap-view/sap-view.component';
import { UserViewComponent } from './viewdata/user-view/user-view.component';

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
    SAPFormComponent,
    ViewComponent,
    DefaultInfoComponent,
    DefaultViewComponent,
    FuelViewComponent,
    HardSoftViewComponent,
    IDViewComponent,
    PCardViewComponent,
    SAPViewComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
