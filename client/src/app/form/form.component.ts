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
		this.masterForm.SubForm1.Approvers.push(new Approver("8273982673"));
		for(let subForm in this.masterForm){
			if(/SubForm\d/.test(subForm)){
				this.masterForm[subForm].Needed = true;
			}
		}
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

	postForm(){
		this.apiService.postForm(this.masterForm);
	}

	getForms(){
		this.apiService.getForms();
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
