import { Component, OnInit } from '@angular/core';

import {Section2Choices} from './SapFormChoices';

@Component({
  selector: 'app-sap-form',
  templateUrl: './sap-form.component.html',
  styleUrls: ['./sap-form.component.css']
})
export class SAPFormComponent implements OnInit {

	holidays = [
    { name: 'Christmas', date: 'Dec 25'} ,
    { name: 'New Years', date: 'Jan 1'}
    ]
    selectedHoliday: string;

    selectedChoices: string[];
    section1Choices: Object;
    
    eventSelection(event){
     this.selectedHoliday = event.date
    }

	tempObject = {
		section1:{
			formReason:'',
			userName:'',
			userCOSAID:'',
			date:'',
			department:'',
			userSAPNum:'',
			jobDesc:'',
			emailAddr:'',
			managerName:'',
			workLocation:'',
			tempEmp:false,
			IDExpStart:'',
			IDExpEnd:'',
			tempRoleAssn:false,
			tempRoleExp:''
		},
		section2:{
			DGD:false,
			CGD:false,
			'Risk':[],
			'Police/Fire Incentives':[],
			'Purchasing':[],
			'Time':[],
			'DHSI Only':[],
			'Accounts Receivable/Sales & Distribution':[],
			'Permit Printing (Dept)':[],
			'Collections':[],
			'Police Department Off Duty':[],
			'Inventory':[],
			'Accounts Payable/Travel':[],
			'Controlling (CO)':[],
			'Finance':[],
			'Fixed Assets':[],
			'Funds Management':[],
			'Projects':[],
			'Business Information Warehouse (BW)':[],
			'Aviation Only – Airline Statistics':[],
			'Plant Maintenance':[],
			'Grants Management':[]
		}
	}


	alert(value){
		console.log(value);
	}

  constructor() {
  	this.section1Choices = Section2Choices;
  }

  ngOnInit() {
  }

}
