import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sap-form',
  templateUrl: './sap-form.component.html',
  styleUrls: ['./sap-form.component.css']
})
export class SAPFormComponent implements OnInit {

	tempObject={
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
		}
	}


	alert(value){
		console.log(value);
	}

  constructor() { }

  ngOnInit() {
  }

}
