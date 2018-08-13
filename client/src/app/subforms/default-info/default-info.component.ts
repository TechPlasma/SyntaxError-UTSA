import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { departments } from '../../Departments';
import { APIService } from '../../api.service';
import { Approver } from '../../MasterForm';	
const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DefaultInfoComponent),
	multi: true
};

@Component({
	selector: 'app-default-info',
	templateUrl: './default-info.component.html',
	styleUrls: ['./default-info.component.css'],
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DefaultInfoComponent implements ControlValueAccessor {

	ERROR;

	SUPERVISORID;

	departments = departments;

	//The internal data model
	private innerValue: any = '';

	//Placeholders for the callbacks which are later provided
	//by the Control Value Accessor
	private onTouchedCallback: () => void = noop;
	private onChangeCallback: (_: any) => void = noop;

	//get accessor
	get SubFormData(): any {
	    return this.innerValue;
	};

	//set accessor including call the onchange callback
	set SubFormData(v: any) {
		if (v !== this.innerValue) {
			this.innerValue = v;
			this.onChangeCallback(v);
		}
	}

	//Set touched on blur
	onBlur() {
		this.onTouchedCallback();
	}

	//From ControlValueAccessor interface
	writeValue(value: any) {
		if (value !== this.innerValue) {
			this.innerValue = value;
		}
	}

	//From ControlValueAccessor interface
	registerOnChange(fn: any) {
		this.onChangeCallback = fn;
	}

	//From ControlValueAccessor interface
	registerOnTouched(fn: any) {
		this.onTouchedCallback = fn;
	}

	async verifySubForm(){

		this.ERROR = [];

		var verified = true;
		var i = 0;

		//array of information fields
		var arr_info = [ 
			this.SubFormData.requestingDepartment,
			this.SubFormData.division,
			this.SubFormData.departmentRequester,
			this.SubFormData.phoneExt,
			this.SubFormData.firstName,
			this.SubFormData.middleInitial,
			this.SubFormData.lastName,
			this.SubFormData.suffix,
			this.SubFormData.phoneNumber,
			this.SubFormData.jobTitle,
			this.SubFormData.sap
		];	
		 
		//array of regular expressions
		var arr_check = [
			/^.+$/,									//Dept Requestor
			/^[a-z A-Z]{1,30}$/,					//Division
			/^[a-z A-Z]{1,30}$/,					//DEPT Requestor
			/^[0-9]{1,10}$/,						//Phone Ext
			/^[a-zA-Z]{1,30}$/,						//First Name
			/^[a-zA-Z]{0,1}$/,						//MI
			/^[a-zA-Z-]{1,30}$/,					//Last Name
			/^[a-zA-Z]{0,10}$/,						//suffix
			/^\(?[0-9]{3}\)?[0-9]{3}-?[0-9]{4}$/,	//Phone Number
			/^[a-z A-Z]{1,30}$/,					//Job Title
			/^[0-9]{6}$/							//SAP
	    ];

	    var arr_names = [ 
			"requestingDepartment",
			"division",
			"departmentRequester",
			"phoneExt",
			"firstName",
			"middleInitial",
			"lastName",
			"suffix",
			"phoneNumber",
			"jobTitle",
			"sap"
		];	

		//Info Check
		while(i < arr_info.length){
		//console.log("while loop");
			if(!arr_check[i].test(arr_info[i])){
				this.ERROR.push(arr_names[i] +" is incorrect!");
				verified = false;
			}//end if

			i++;
		}//end while
		
		//Date Check
		if(!(this.SubFormData.date instanceof Date)){
			this.ERROR.push("Date format incorrect!");
			verified = false;
		}//end if

		let employee = this.apiService.EMPLOYEE.getValue();
		let approver1;
		if(employee != null){
			approver1 = new Approver('Requester',employee.DEPT);
			approver1.ID = employee.SAP;
			approver1.NAME = employee.FIRSTNAME+" "+employee.LASTNAME;
			approver1.APPROVED = 'Approved';
		}
		
		//console.log(approver1);


		let supervisorexits = await this.apiService.getEmployeeID(this.SUPERVISORID);

		let approver2 = new Approver('Department Head/Supervisor','ANY');
		
		if(supervisorexits[1] == true){
			approver2.DEPARTMENTCODE = supervisorexits[0].DEPT;
			approver2.ID = supervisorexits[0].SAP;
			approver2.NAME = supervisorexits[0].FIRSTNAME+" "+supervisorexits[0].LASTNAME;
			//console.log(approver2);
		}else{
			this.ERROR.push("INVALID SUPERVISOR SAP ID");
		}

		//console.log(this.SubFormData);
		if(verified && supervisorexits[1]){
			this.SubFormData.Approvers.push(approver1);
			this.SubFormData.Approvers.push(approver2);
			this.SubFormData.Completed = true;
		}//end if
	}//end method

	constructor(private apiService:APIService) {

	}

	ngOnInit(){

	}


}
