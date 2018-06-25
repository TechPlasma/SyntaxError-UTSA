//IDEA: isolate data structure from component code.

// we create a data structure that represents a P-card form. Define an p-card class.
//in a MVC pattern, this would be the Model.

// We will update our p card form component. We'll store properties on an instance of this class. 

export class pCard { 
	//checkboxes in the form.
	webAccessOnly: boolean;
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

	deptAppChName: string; //Department Approver for this CardHolder(CH)
	deptAppChSapNm: string; 

	reconcilerBoolean: boolean;

	//Card Setup
	//ch = card holder.
	chFirstName: string;
	chLastName: string;

	//Accounting Codes
	defCostType: string;
	defCode: string;
	description: string;

	//set Cardholder limits
	limitsRequested: string;
	formComments: string; 

	//Signature
	sigBox: boolean; //checkbox for signature.
	userID: string;
	password: string;
	deptAdmin: string; //dept. approver/admin
	date: string; //NOTE: there might be a date type instead of a string. 
	

}//end pCard class.