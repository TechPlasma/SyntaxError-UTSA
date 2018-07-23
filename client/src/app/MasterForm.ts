

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
		this.SubForm6 = new SubForm6();
		this.FID = "";
	}
	SubForm0:SubForm0;
	SubForm1:SubForm1;
	SubForm2:SubForm2;
	SubForm3:SubForm3;
	SubForm4:SubForm4;
	SubForm5:SubForm5;
	SubForm6:SubForm6;

	FID:any;
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
	//ID:string;
	//DependantIDs:string[];
	Approved:boolean;
}




class SubForm0{
	constructor(){
		this.FormName = "Common Infomation";
		this.Completed = false;
		this.Needed = true;
		this.Fulfillment = "Common Information";



		this.requestingDepartment = '';
		this.division = '';
		this.departmentRequester = '';
		this.phoneExt = '';
		this.date = '';

		this.firstName = '';
		this.middleInitial = '';
		this.lastName = '';
		this.suffix = '';
		this.phoneNumber = '';
		this.jobTitle = '';
		this.sap = '';	
	}

	FormName:string;
	Completed:boolean;
	Needed = true;
	Fulfillment:string;

	//Common Fields Between All Forms
	
	requestingDepartment:string;
	division:string;
	departmentRequester:string;
	phoneExt:string;
	date:string;


	firstName:string;
	middleInitial:string;
	lastName:string;
	suffix:string;
	phoneNumber:string;
	jobTitle:string;
	sap:string;



}

class SubForm1{
	constructor(){
		this.FormName = "CoSA ID Card Request";
		this.Completed = false;
		this.Needed = false;
		this.ApprovalStatus = 'Pending';
		this.Fulfillment = 'ITSD';
		this.Approvers = [];

		this.jobStatus = '';
		this.workPhone = '';
		this.contactPhone = '';

		this.companyName = '';
		this.pocName = '';
		this.contactNum = '';
		this.contractNum = '';
		this.contractExp = '';

		this.idCard = false;
		this.facilityAccess = false;
		this.cjis = false;
		this.addrChange = false;
		this.reIssueCard = false;

		this.facilityName = '';
		this.facilityAddr = '';
		this.facilityEntry = '';
		this.suiteEntry = '';
		this.roomEntry = '';
		this.other = '';
	}

	FormName:string;
	Completed:boolean;
	Needed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fulfillment:string;
	Approvers:Approver[];

	jobStatus:string;
	workPhone:string;
	contactPhone:string;

	companyName:string;
	pocName:string;
	contactNum:string;
	contractNum:string;
	contractExp:string;

	idCard:boolean;
	facilityAccess:boolean;
	cjis:boolean;
	addrChange:boolean;
	reIssueCard:boolean;

	facilityName:string;
	facilityAddr:string;
	facilityEntry:string;
	suiteEntry:string;
	roomEntry:string;
	other:string;



}

class SubForm2{
	constructor(){
		this.FormName = "User Provisioning Request";
		this.Completed = false;
		this.Needed = false;
		this.ApprovalStatus = 'Pending';
		this.Fulfillment = 'ITSD';
		this.Approvers = [];

		this.reqType = false;

		// User Provisioning
		this.userType = '';
		this.dtOfHire = '';
		this.workLoc = '';
		this.deviceAssign = false;
		this.deviceAssetNr = '';
		this.phoneAssign = false;
		this.phoneAssign2 = false;

		// User Access
		this.homeDr = false;
		this.deptShareDr = false;
		this.email = '';
		this.name = '';
		this.addReq = false;
		this.addReqText = '';
		this.mfAccess = false;
		this.mfText = '';
	}

	FormName:string;
	Completed:boolean;
	Needed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fulfillment:string;
	Approvers:Approver[];

	reqType:boolean;

	// User Provisioning
	userType: string;
	dtOfHire: string;
	workLoc: string;
	deviceAssign: boolean;
	deviceAssetNr: string;
	phoneAssign: boolean;
	phoneAssign2: boolean;

	// User Access
	homeDr: boolean;
	deptShareDr: boolean;
	email: string;
	name: string;
	addReq: boolean;
	addReqText: string;
	mfAccess: boolean;
	mfText: string;

}

class SubForm3{
	constructor(){
		this.FormName = "Hardware/Software Request";
		this.Completed = false;
		this.Needed = false;
		this.ApprovalStatus = 'Pending';
		this.Fulfillment = 'ITSD';
		this.Approvers = [];


		this.provHardware = false;
		this.provSoftware = false;

		
		this.hardCostCenterIO = '';
		this.hardGlAcc = '';

		this.softCostCenterIO = '';
		this.softGlAcc = '';

		this.BldgLoc = '';
		this.floor = '';
		this.office = '';

		this.requestType = '';
		this.currentDeviceId = ''; 

		
		this.desktopBox = false;
		this.desktopInput = '';

		this.laptopBox = false;
		this.laptopInput = '';
		
		this.dockingStation = false;
		this.keyMouse = false;
		this.addMonitor = false;

		this.monitorBox = false;
		this.monitorInput = '';
		 
		this.monitorMode = '';

		this.printerBox = false;
		this.printerInput = '';

		this.ipDeskPhoneBox = false;
		this.ipDeskPhoneInput = '';

		this.otherBox = false;
		this.otherInput = '';

		this.softwareOtherBox = false;
		this.softwareOtherInput = '';
		this.specialSoftware = [];
	}

	FormName:string;
	Completed:boolean;
	Needed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fulfillment:string;
	Approvers:Approver[];


	//checkboxs:
	provHardware: boolean;
	provSoftware: boolean;

	//fields for those checkboxs:
	hardCostCenterIO: string;
	hardGlAcc: string;

	softCostCenterIO: string;
	softGlAcc: string;

	BldgLoc: string;
	floor: string;
	office: string;

	requestType: string;
	currentDeviceId: string; 

	//checkboxes in this section of the form.
	desktopBox: boolean;
	desktopInput: string;

	laptopBox: boolean;
	laptopInput: string;
	//Laptop box onlocks new checkboxes.
	dockingStation: boolean;
	keyMouse: boolean;
	addMonitor: boolean;

	monitorBox: boolean;
	monitorInput: string;
	//monitor checkbox unlocks a 'Mode' dropdown menu. 
	monitorMode: string;

	printerBox: boolean;
	printerInput: string;

	ipDeskPhoneBox: boolean;
	ipDeskPhoneInput: string;

	otherBox: boolean;
	otherInput: string;

	softwareOtherBox: boolean;
	softwareOtherInput: string;
	specialSoftware: any[];

	
}

class SubForm4{
	constructor(){
		this.FormName = "P-Card Setup/Maintenance";
		this.Completed = false;
		this.Needed = false;
		this.ApprovalStatus = 'Pending';
		this.Fulfillment = 'ITSD';
		this.Approvers = [];

		this.requestFormType = '';

		
		this.ceoWebAccessOnly = false;
		this.newCardRequest = false;
		this.chMaintenance = false;

		this.cosaEmail = '';

		this.role = '';
		this.roleDetails = '';

		this.deptAppChName = '';
		this.deptAppChSapNm = ''; 

		this.reconcilerBoolean = false;
		this.reconcilerName = '';
		this.reconcilerSapNm = '';

		this.chFirstName = '';
		this.chLastName = '';


		this.tempDate = '';
		this.chChange = '';
		this.chTransLimits = false; 
		this.chName = false;		
		this.chRoleChange = false;	
		this.chlastFourCardDigits = ''; 

		this.newUserName = '';
		this.newChFirstName = '';
		this.newChMiddleName = '';
		this.newChLastName = '';
		this.newChSuffix = '';

		this.defCostType = '';
		this.defCode = '';
		this.description = '';

		this.limitsRequested = '';
		this.limitExplain = ''; 

		this.formComments = ''; 
	}

	FormName:string;
	Completed:boolean;
	Needed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fulfillment:string;
	Approvers:Approver[];

	requestFormType: string;

	//checkboxes in the form.
	ceoWebAccessOnly: boolean;
	newCardRequest: boolean;
	chMaintenance: boolean;

	cosaEmail: string;

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
	tempDate: string;
	chChange: string;
	chTransLimits: boolean; //checkbox only fields
	chName: boolean;		//checkbox only fields
	chRoleChange: boolean;	//checkbox only fields
	chlastFourCardDigits: string; //checkbox only fields. 

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
	
}

class SubForm5{
	constructor(){
		this.FormName = "Fueling Authorization Request";
		this.Completed = false;
		this.Needed = false;
		this.ApprovalStatus = 'Pending';
		this.Fulfillment = 'BES';
		this.Approvers = [];

		this.costCenter = '';
		this.reviewedAD1 = false;
		this.trainingCourse = false;
	}

	FormName:string;
	Completed:boolean;
	Needed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fulfillment:string;
	Approvers:Approver[];

	costCenter:string;
	reviewedAD1:boolean;
	trainingCourse:boolean;

	
}

class SubForm6{
	constructor(){
		this.FormName = "SAP Security Request";
		this.Completed = false;
		this.Needed = false;
		this.ApprovalStatus = 'Pending';
		this.Fulfillment = 'SEC';
		this.Approvers = [];

		this.formReason = '';
		this.userCOSAID = '';
		this.userSAPNum = '';
		this.emailAddr = '';
		this.workLocation = '';
		this.tempEmp = false;
		this.IDExpStart = '';
		this.IDExpEnd = '';
		this.tempRoleAssn = false;
		this.tempRoleExp = '';

		this.DGD = false;
		this.CGD = false;
		this['Risk'] = [];
		this['Police/Fire Incentives'] = [];
		this['Purchasing'] = [];
		this['Time'] = [];
		this['DHSI Only'] = [];
		this['Accounts Receivable/Sales & Distribution'] = [];
		this['Permit Printing (Dept)'] = [];
		this['Collections'] = [];
		this['Inventory'] = [];
		this['Accounts Payable/Travel'] = [];
		this['Controlling (CO)'] = [];
		this['Finance'] = [];
		this['Fixed Assets'] = [];
		this['Funds Management'] = [];
		this['Projects'] = [];
		this['Business Information Warehouse (BW)'] = [];
		this['Aviation Only – Airline Statistics'] = [];
		this['Plant Maintenance'] = [];
		this['Grants Management'] = [];

		this['Purchasing'] = [];
		this['Grants Management'] = [];

		this.creditMemoChoice = '';
		this['Human Resources / HR Designee Approval'] = [];
		this['Department Roles Purchasing Designee Approval'] = [];
		this['Emergency Operations'] = [];
		this['Accounts Receivable'] = [];
		this['Accounts Payable/Travel'] = [];
		this['Finance'] = [];
		this['Treasury'] = [];
		this['Payroll'] = [];
		this['Grants Management'] = [];
		this['Time and Attendance'] = [];
		this['Projects'] = [];
		this['Budget Department (Funds Management)'] = [];


	}

	FormName:string;
	Completed:boolean;
	Needed:boolean;
	ApprovalStatus:ApprovalStatus;
	Fulfillment:string;
	Approvers:Approver[];

	formReason:string;
	userCOSAID:string;
	userSAPNum:string;
	emailAddr:string;
	workLocation:string;
	tempEmp:boolean;
	IDExpStart:string;
	IDExpEnd:string;
	tempRoleAssn:boolean;
	tempRoleExp:string;

	

	DGD:boolean;
	CGD:boolean;
	'Risk':string[];
	'Police/Fire Incentives':string[];
	'Purchasing(Section2)':string[];
	'Time':string[];
	'DHSI Only':string[];
	'Accounts Receivable/Sales & Distribution':string[];
	'Permit Printing (Dept)':string[];
	'Collections':string[];
	'Police Department Off Duty':string[];
	'Inventory':string[];
	'Accounts Payable/Travel(Section2)':string[];
	'Controlling (CO)':string[];
	'Finance(Section2)':string[];
	'Fixed Assets':string[];
	'Funds Management':string[];
	'Projects(Section2)':string[];
	'Business Information Warehouse (BW)':string[];
	'Aviation Only – Airline Statistics':string[];
	'Plant Maintenance':string[];
	'Grants Management(Section2)':string[];




	'Purchasing(Section3)':string[];
	'Grants Management(Section3)':string[];


	creditMemoChoice:string;
	'Human Resources / HR Designee Approval':string[];
	'Department Roles Purchasing Designee Approval':string[];
	'Emergency Operations':string[];
	'Accounts Receivable':string[];
	'Accounts Payable/Travel(Section4)':string[];
	'Finance(Section4)':string[];
	'Treasury':string[];
	'Payroll':string[];
	'Grants Management(Section4)':string[];
	'Time and Attendance':string[];
	'Projects(Section4)':string[];
	'Budget Department (Funds Management)':string[];

}