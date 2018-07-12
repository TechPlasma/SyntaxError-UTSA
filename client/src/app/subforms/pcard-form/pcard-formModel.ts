//IDEA: isolate data structure from component code.

// we create a data structure that represents a P-card form. Define an p-card class.
//in a MVC pattern, this would be the Model.

// We will update our p card form component. We'll store properties on an instance of this class. 

export interface limReq {
  value: string;
  viewValue: string;
}

export class pCard { 
	/* radio button for form type choice.
	
	CLIENT explained that Each option is a different type of request
	 and only one can be chosen at a time. Thus form checkboxes are actually radio buttons.
	*/
	//radio button for request type.
	requestFormType: string;

	//checkboxes in the form.
	ceoWebAccessOnly: boolean;
	newCardRequest: boolean;
	chMaintenance: boolean;


	// Personal information
	firstName: string;
	middleName: string;	
	lastName: string;
	suffix: string;

	userName: string;
	cosaEmail: string;

	sapEmpId: string;
	dept: string;

	//	STUFF that reacts to webAccessOnly being checked. Reactive fields 
	role: string; //another dropdown menu in the actual form.
	roleDetails: string;
	//might need a separate comment field for this. DOUBLE CHECK later. 
	//

	deptAppChName: string; //Department Approver for this CardHolder(CH)
	deptAppChSapNm: string; 

	reconcilerBoolean: boolean;
	reconcilerName: string;
	reconcilerSapNm: string;

	//Card Setup
	//ch = card holder.
	chFirstName: string;
	chLastName: string;

	//CardHolder Maintenance Fields.
	tempDate: any;
	chChange: any;
	chTransLimits: boolean; //checkbox only fields
	chName: boolean;		//checkbox only fields
	chRoleChange: boolean;	//checkbox only fields
	chlastFourCardDigits: number; //checkbox only fields. 

	//stuff for changing card holder fields.
	newUserName: string;
	newChFirstName: string;
	newChMiddleName: string;
	newChLastName: string;
	newChSuffix: string;


	//Accounting Codes
	defCostType: string;
	defCode: string;
	description: string;

	//set Cardholder limits
	limitsRequested: string;
	limitExplain: string; 

	formComments: string; 

	//Signature
	sigBox: boolean; //checkbox for signature.
	userID: string;
	password: string;
	deptAdmin: string; //dept. approver/admin
	date: any; //NOTE: there might be a date type instead of a string. 
	

}//end pCard class.


