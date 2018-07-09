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
	deviceAssetNr: number;
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
	addReqText: string;
	mfAccess: boolean;
	mfAppAccList: boolean;
	mfText: string;

	// Signatures
	requester: string;
	requesterDt: string;
	deptHd_Designee: string;
	dHdDt: string;
}