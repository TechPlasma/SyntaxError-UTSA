import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { DepartmentComponent } 	from './department/department.component';
import { FormComponent } 		from './form/form.component';
import { UserComponent }		from './user/user.component';
import { UserLoginComponent }	from './user-login/user-login.component';
import { ViewComponent }		from './view/view.component';
import { AdminComponent }		from './admin/admin.component';

const routes: Routes = [
	{ path: '', component: UserLoginComponent },

	{ path: 'view', component: ViewComponent },

	{ path: 'admin', component: AdminComponent },

	{ path: 'department/:DID', component: DepartmentComponent },
	{ path: 'department', component: DepartmentComponent },

	{ path: 'form/:FID', component: FormComponent },
	{ path: 'form', component: FormComponent },

	{ path: 'user/:UID', component: UserComponent },
	{ path: 'user', component: UserComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports:[RouterModule]
})
export class AppRoutingModule{}
