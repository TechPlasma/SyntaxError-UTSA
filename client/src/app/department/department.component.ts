import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MasterForm } from '../MasterForm';

import { APIService } from '../api.service';
import { Observable, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

	subscription:Subscription;

	department;
	departmentIN;
	departmentOUT;

	DID;

	tempMasterForm;

	markInProgress(form){
		this.apiService.patchFulfillment('In-Progress',form.FID);
	}

	markFulfilled(form){
		this.apiService.patchFulfillment('Fulfilled',form.FID);
	}

	itsdDEPT(){
		this.apiService.getDepartmentCODE("ITSD",true);
	}

	adminDEPT(){
		this.apiService.getDepartmentCODE("ADMIN",true);
	}

	async getForms(){
		if(this.department != null){
			this.departmentIN =  await this.apiService.getMasterFormArr(this.department.inMasterForms,"DEPTIN")[0];
			this.departmentOUT =  await this.apiService.getMasterFormArr(this.department.outMasterForms,"DEPTOUT")[0];
		}
		
	}
	

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private apiService:APIService
	) {
		this.DID = +this.route.snapshot.paramMap.get('DID');

		this.tempMasterForm = new MasterForm();
		
		this.subscription = this.apiService.getOBSDepartment().subscribe((value)=>{
			this.department = value;
			//console.log("SHow me:");
			//console.log(value);
		});

		this.subscription = this.apiService.getOBSDeptInForms().subscribe((value)=>{
			this.departmentIN = value;
			//console.log("SHow me:");
			//console.log(value);
		});

		this.subscription = this.apiService.getOBSDeptOutForms().subscribe((value)=>{
			this.departmentOUT = value;
			//console.log("SHow me:");
			//console.log(value);
		});

		apiService.pollingFunction();

		
	}

	ngOnInit() {
		setInterval(()=>{
			this.getForms();
		},10000);
		
	}

}
