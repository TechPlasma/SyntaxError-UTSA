import { Component, OnInit } from '@angular/core';

import {Section2Choices,Section3Choices,Section4Choices} from './SapFormChoices';

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
    section2Choices: Object;
    section3Choices: Object;
    section4Choices: Object;
    
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
		},
		section3:{
			'Purchasing':[],
			'Grants Management':[]
		},
		section4:{
			creditMemoChoice:'',
			'Human Resources / HR Designee Approval':[],
			'Department Roles Purchasing Designee Approval':[],
			'Emergency Operations':[],
			'Accounts Receivable':[],
			'Accounts Payable/Travel':[],
			'Finance':[],
			'Treasury':[],
			'Payroll':[],
			'Grants Management':[],
			'Time and Attendance':[],
			'Projects':[],
			'Budget Department (Funds Management)':[]
		}
	}

	checkCreditMemo(){
		if('Credit Memo Sales Order Approver (Select option below)' in this.tempObject.section4['Accounts Receivable']){
			return true;
		}else{
			return false;
		}
	}


	alert(value){
		console.log(value);
	}

  constructor() {
  	this.section2Choices = Section2Choices;
  	this.section3Choices = Section3Choices;
  	this.section4Choices = Section4Choices;
  }

  ngOnInit() {
  }

}
