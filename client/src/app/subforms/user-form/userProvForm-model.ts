export class userProvForm{
	// Department Request
	department: string;
	deptRequester: string;
	deptDate: string;
	phoneExt: string;
	reqType: number;

	// User Provisioning
	userType: number;
	dtOfHire: string;
	userName: string;
	empSapNr: number;
	workLoc: string;
	deviceAssign: boolean;
	deviceAssetNr: boolean;
	phoneAssign: boolean;
	phoneAssign2: boolean;

	// User Access
	homeDr: boolean;
	deptShareDr: boolean;
	email: string;
	name: string;
	sapNr: number;
	addReq: boolean;
	addReqList: boolean;
	// something else is needed to record stuff based off of previous 2 boolean variables
	mfAccess: boolean;
	mfAppAccList: boolean;
	// something else is needed to record stuff based off of previous 2 boolean variables

	// Signatures
	requestor: string;
	requestorDt: string;
	deptHd_Designee: string;
	dHdDt: string;
}