import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { APIService } from '../api.service';

import { MasterForm, Approver } from '../MasterForm';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  inputs:['userName']
})
export class FormComponent implements OnInit {

	userName:"";

	masterForm;

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

	submitForm(){
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


		//this.apiService.postForm(this.masterForm);
	}


	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private apiService:APIService){
		this.FID = +this.route.snapshot.paramMap.get('FID');

		if(this.FID == 0){
			this.newForm();
		}else{
			this.existingForm();
		}
		
	}

	ngOnInit() {
	}

}
