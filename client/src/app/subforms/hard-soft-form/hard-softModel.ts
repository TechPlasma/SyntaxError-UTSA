
export class hardSoftForm{
	department: string;
	date: any;
	depRequestor: string;
	phoneExt: string;

	//checkboxs:
	provHardware: boolean;
	provSoftware: boolean

	//fields for those checkboxs:
	hardCostCenterIO: string;
	hardGlAcc: string;

	softCostCenterIO: string;
	softGlAcc: string;
	
	userName: string;
	SAPLogonId: string;
	formPosition: string;

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

	userId: string;
	userPassword: string;

	requestor: string;
	requestorDate: any;
	deptDFA: string;
	dfaDate: any;
	deptHead: string;
	headDate: any;
	

}
export class SpecialSoftware {
		softDesc:string;
		loginID:string;
	}

