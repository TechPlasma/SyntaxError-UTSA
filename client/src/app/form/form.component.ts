import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	testForm ={
		formName:"",
		CardForm:{
			needed:false,
			name:"CoSA ID Card Request",
			summary:"Fufillment By: ITSD"
		},
		UserForm:{
			needed:false,
			name:"User Provisioning Request",
			summary:"Fufillment By: ITSD"
		},
		HardSoftForm:{
			needed:false,
			name:"Hardware/Software Request",
			summary:"Fufillment By: ITSD"
		},
		PCardForm:{
			needed:false,
			name:"Pcard Setup/Maintenance",
			summary:"Fufillment By: FIN"
		},
		FuelingForm:{
			needed:false,
			name:"Fueling Authorization Request",
			summary:"Fufillment By: BES"
		},	
		SAPForm:{
			needed:false,
			name:"SAP Security Request",
			summary:"Fufillment By: SEC"
		}
	}

	constructor() { }

	ngOnInit() {
	}

}
