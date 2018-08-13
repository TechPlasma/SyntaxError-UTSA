import { Component, OnInit } from '@angular/core';

import { APIService } 	from '../api.service';

import { MasterForm } 	from '../MasterForm';
import { Employee } 	from '../Employee';
import { Department } 	from '../Department';
import { deptLookup } 	from '../Departments';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	EMPLOYEEARR;
	MASTERFORMARR;
	DEPARTMENTARR;

	DELFORM;
	DELEMP;
	DELDEPT;

	EMPfirstName;
	EMPmi;
	EMPlastName;
	EMPdeptCode;
	EMPposit;
	EMPsap;
	EMPpwd;
	EMPemail;

	DEPcode;
	DEPisFufil = false;


	async getForms(){
		this.MASTERFORMARR = await this.apiService.getForms();
	}

	deleteForm(formID){
		this.apiService.deleteForm(formID);

		setTimeout(()=>{
			this.getForms();
		},1500);

		
	}

	addEmployee(){
		let emp = new Employee();
		emp.FIRSTNAME = this.EMPfirstName;
		emp.LASTNAME = this.EMPlastName;
		emp.DEPT = this.EMPdeptCode;
		emp.POSIT = this.EMPposit;
		emp.EMAIL = this.EMPemail;
		emp.MI = this.EMPmi;
		emp.SAP = this.EMPsap;
		emp.PWD = this.EMPpwd;

		this.apiService.postEmployee(emp);

		setTimeout(()=>{
			this.getEmployees();
		},1500);
	}

	async getEmployees(){
		this.EMPLOYEEARR = await this.apiService.getEmployees();
	}

	deleteEmployee(SAPID){
		this.apiService.deleteEmployee(SAPID);

		setTimeout(()=>{
			this.getEmployees();
		},1500);
	}

	async getDepartments(){
		this.DEPARTMENTARR = await this.apiService.getDepartments();
	}

	addDepartment(){
		let dept = new Department();
		dept.DEPTCODE = this.DEPcode;
		dept.DEPTNAME = deptLookup[this.DEPcode];
		dept.isFulfillment = this.DEPisFufil;

		this.apiService.postDepartment(dept);

		setTimeout(()=>{
			this.getDepartments();
		},1500);
	}

	deleteDepartment(dID){
		this.apiService.deleteDepartment(dID);

		setTimeout(()=>{
			this.getDepartments();
		},1500);
	}


	constructor(private apiService:APIService) {
		this.getDepartments();
		this.getEmployees();
		this.getForms();


		// setInterval(()=>{
		// 	this.getDepartments();
		// 	this.getEmployees();
		// 	this.getForms();
		// },15000);
	}

	ngOnInit() {
	}

}
