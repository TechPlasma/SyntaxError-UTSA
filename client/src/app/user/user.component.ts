import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { APIService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	subscription:Subscription;

	UID;

	employee;

	empForms;

	sign(form,mode){
		let allFormsGood = true;

		for(let subForm in form){
			if(/SubForm\d/.test(subForm)){
				let applist = 0;
				for(let app in form[subForm].Approvers){

					if(form[subForm].Approvers[app].ID == this.employee.SAP){
						form[subForm].Approvers[app].APPROVED = mode;
					}
					if(form[subForm].Approvers[app].APPROVED == mode){
						applist++;
					}
				}

				if(applist == form[subForm].Approvers.length){
					form[subForm].ApprovalStatus = 'Approved';
				}

				if(form[subForm].ApprovalStatus == 'Approved' || form[subForm].ApprovalStatus == 'Rejected'){

				}else{
					allFormsGood = false;
				}
			}
		}

		if(allFormsGood){
			form.Status = "Approved";
		}



		this.apiService.patchForm(form);
	}

	async getForms(){
		this.empForms =  await this.apiService.getMasterFormArr(this.employee.FORMS,"EMP")[0];
		console.log(this.empForms);
	}

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private apiService: APIService
	) {
		this.UID = +this.route.snapshot.paramMap.get('UID');

		this.subscription = apiService.getOBSEmployee().subscribe((value) => {
			this.employee = value;
			//console.log(value);
		});

		this.subscription = this.apiService.getOBSEmpForms().subscribe((value)=>{
			this.empForms = value;
			//console.log("SHow me:");
			//console.log(value);
		});
	}

	ngOnInit() {
		// this.getForms();
		console.log(this.empForms);
	}

}
