import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MasterForm, Approver } from './MasterFormTesting';

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

	testForm ={
		formName:"",
		IDForm:{
			needed:true, 
			name:"CoSA ID Card Request",
			summary:"Fufillment By: ITSD"
		},
		UserForm:{
			needed:true,
			name:"User Provisioning Request",
			summary:"Fufillment By: ITSD"
		},
		HardSoftForm:{
			needed:true,
			name:"Hardware/Software Request",
			summary:"Fufillment By: ITSD"
		},
		PCardForm:{
			needed:true,
			name:"Pcard Setup/Maintenance",
			summary:"Fufillment By: FIN"
		},
		FuelForm:{
			needed:true,
			name:"Fueling Authorization Request",
			summary:"Fufillment By: BES"
		},	
		SAPForm:{
			needed:true,
			name:"SAP Security Request",
			summary:"Fufillment By: SEC"
		}
	}

	constructor(
		private route: ActivatedRoute,
		private location: Location,
	) {
		this.FID = +this.route.snapshot.paramMap.get('FID');
		this.masterForm = new MasterForm();
		this.masterForm.SubForm1.Approvers.push(new Approver("8273982673"));

		console.log(this.masterForm);
	}

	ngOnInit() {
	}

}
