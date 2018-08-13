import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { APIService } from '../api.service';

import { MasterForm, Approver } from '../MasterForm';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  inputs:['userName']
})
export class FormComponent implements OnInit {

	subscription:Subscription;

	userName:"";

	masterForm;

	employee;

	FID;

	newForm(){
		this.masterForm = new MasterForm();
		//this.masterForm.SubForm1.Approvers.push(new Approver("8273982673"));
		// for(let subForm in this.masterForm){
		// 	if(/SubForm\d/.test(subForm)){
		// 		this.masterForm[subForm].Needed = true;
		// 	}
		// }
		console.log(this.masterForm);
	}

	resetForms(){
		for(let subForm in this.masterForm){
			if(/SubForm\d/.test(subForm)){
				this.masterForm[subForm].Completed = false;
			}
		}
	}

	existingForm(){

	}

	async submitForm(){
		let allCompleted = true;
		let minSelected = false;

		for(let subForm in this.masterForm){
			if(/SubForm[1-9]/.test(subForm)){
				if(this.masterForm[subForm].Needed){
					minSelected = true;
					if(!this.masterForm[subForm].Completed){
						allCompleted = false;
					}
				}
			}
			if(/SubForm0/.test(subForm)){
				if(!this.masterForm[subForm].Completed){
					allCompleted = false;
				}
			}
		}

		console.log("All Completed: "+allCompleted);
		console.log("Min Selected:  "+minSelected);

		if(allCompleted && minSelected){
			let FID = await this.apiService.postForm(this.masterForm);

			let postedDEPTS = [];
			let postedUSERS = [];

			for(let subForm in this.masterForm){
				if(/SubForm\d/.test(subForm)){
					for(let app of this.masterForm[subForm].Approvers){
						if(!(postedUSERS.includes(app.NAME))){
							postedDEPTS.push(app.NAME);

							let tempEmp = await this.apiService.getEmployeeID(app.ID);
							console.log(tempEmp);

							tempEmp[0].FORMS.push(FID);

							//this.apiService.postEmployee(tempEmp[0]);

							this.apiService.putEmployeeForm(tempEmp[0].FORMS,tempEmp[0].SAP);
						}
					}
				}
				if(/SubForm[1-9]/.test(subForm)){
					let dept = this.masterForm[subForm].Fulfillment;
					if(this.masterForm[subForm].Needed && !(postedDEPTS.includes(dept))){
						postedDEPTS.push(dept);

						let deptDat = await this.apiService.getDepartmentCODE(dept,false);
						console.log(deptDat);

						deptDat[0][0].inMasterForms.push(FID);

						//this.apiService.postDepartment(deptDat[0][0]);

						this.apiService.putDepartmentForm(deptDat[0][0].inMasterForms,deptDat[0][0].dID,"in");
					}
				}
			}


		let deptDat = await this.apiService.getDepartmentCODE(this.employee.DEPT,false);
		console.log(deptDat);

		deptDat[0][0].inMasterForms.push(FID);

		this.apiService.putDepartmentForm(deptDat[0][0].inMasterForms,deptDat[0][0].dID,"out");

		alert("Success! Requisition Submitted");
		this.router.navigate(['/view/']);

		}

		

		console.log(this.masterForm);
	}


	constructor(
		private route: ActivatedRoute,
		private router:Router,
		private location: Location,
		private apiService:APIService){
		this.FID = +this.route.snapshot.paramMap.get('FID');

		if(this.FID == 0){
			this.newForm();
		}else{
			this.existingForm();
		}

		this.subscription = apiService.getOBSEmployee().subscribe((value) => {
			this.employee = value;
			//console.log(value);
		});
		
	}

	ngOnInit() {
	}

}
