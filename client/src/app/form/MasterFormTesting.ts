

// Approval Statuses
// 		- Pending
// 		- Approved
// 		- Rejected
type ApprovalStatus = 'Pending' | 'Approved' | 'Rejected';


export class MasterForm{
	constructor(){
		this.SubForm0 = new SubForm0();
		this.SubForm1 = new SubForm1();
		this.SubForm2 = new SubForm2();
		this.SubForm3 = new SubForm3();
		this.SubForm4 = new SubForm4();
		this.SubForm5 = new SubForm5();
		this.SubForm6 = new SubForm5();
	}

	SubForm0:SubForm0;
	SubForm1:SubForm1;
	SubForm2:SubForm2;
	SubForm3:SubForm3;
	SubForm4:SubForm4;
	SubForm5:SubForm5;
	SubForm6:SubForm6;
}


export class Approver{
	
	// Can call:
	//  new Approver(id)
	//  new Approver(id,dependantIDs)
	constructor(private ID?:string,private DependantIDs?:string[]){
		if(this.ID == undefined){
			this.ID = '';
		}
		if(this.DependantIDs == undefined){
			this.DependantIDs = [];
		}
		this.Approved = false;
	}
	Approved:boolean;
}




class SubForm0{
	constructor(){
		this.FormName = "Common Infomation";
		this.Completed = false;
		this.Fufillment = "Common Information";
	}

	FormName:string;
	Completed:boolean;
	Fufillment:string;

}

class SubForm1{
	constructor(){
		this.FormName = "CoSA ID Card Request";
		this.Completed = false;
		this.ApprovalStatus = 'Pending';
		this.Fufillment = 'ITSD';
		this.Approvers = [];
	}

	FormName:string;
	Completed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fufillment:string;
	Approvers:Approver[];

}

class SubForm2{
	constructor(){
		this.FormName = "User Provisioning Request";
		this.Completed = false;
		this.ApprovalStatus = 'Pending';
		this.Fufillment = 'ITSD';
		this.Approvers = [];
	}

	FormName:string;
	Completed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fufillment:string;
	Approvers:Approver[];

}

class SubForm3{
	constructor(){
		this.FormName = "Hardware/Software Request";
		this.Completed = false;
		this.ApprovalStatus = 'Pending';
		this.Fufillment = 'ITSD';
		this.Approvers = [];
	}

	FormName:string;
	Completed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fufillment:string;
	Approvers:Approver[];
	
}

class SubForm4{
	constructor(){
		this.FormName = "P-Card Setup/Maintenance";
		this.Completed = false;
		this.ApprovalStatus = 'Pending';
		this.Fufillment = 'ITSD';
		this.Approvers = [];
	}

	FormName:string;
	Completed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fufillment:string;
	Approvers:Approver[];
	
}

class SubForm5{
	constructor(){
		this.FormName = "Fueling Authorization Request";
		this.Completed = false;
		this.ApprovalStatus = 'Pending';
		this.Fufillment = 'BES';
		this.Approvers = [];
	}

	FormName:string;
	Completed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fufillment:string;
	Approvers:Approver[];
	
}

class SubForm6{
	constructor(){
		this.FormName = "SAP Security Request";
		this.Completed = false;
		this.ApprovalStatus = 'Pending';
		this.Fufillment = 'SEC';
		this.Approvers = [];
	}

	FormName:string;
	Completed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fufillment:string;
	Approvers:Approver[];
	
}