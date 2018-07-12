import { Component, OnInit } from '@angular/core';
import { userProvForm } from './userProvForm-model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  // make object of type userProvForm
  UPR: userProvForm = {
  	// Department Request
  	department: ``,
	deptRequester: ``,
	deptDate: ``,
	phoneExt: ``,
	reqType: -1,

	// User Provisioning
	userType: -1,
	dtOfHire: ``,
	userName: ``,
	empSapNr: -1,
	workLoc: ``,
	deviceAssign: false,
	deviceAssetNr: -1,
	phoneAssign: false,
	phoneAssign2: false,

	// User Access
	homeDr: false,
	deptShareDr: false,
	email: ``,
	name: ``,
	sapNr: -1,
	addReq: false,
	addReqList: false,
	addReqText: ``,
	mfAccess: false,
	mfAppAccList: false,
	mfText: ``,
	
	// Signatures
	requester: ``,
	requesterDt: ``,
	deptHd_Designee: ``,
	dHdDt: ``
  }

  constructor() { }

  ngOnInit() {
  }

  // log events to see if they are happening
  addToLog(UPR: userProvForm) {
  	// template : console.log(`: ${UPR.}`);

  	/*
  	console.log(`Department: ${UPR.department}`);
  	console.log(`Requestor: ${UPR.deptRequester}`);
  	console.log(`Date: ${UPR.deptDate}`);
  	console.log(`Phone Ext.: ${UPR.phoneExt}`);
  	console.log(`Request Type: ${UPR.reqType}`);
  	*/

  	/*
  	console.log(`UserType: ${UPR.userType}`);
  	console.log(`Date Of Hire: ${UPR.dtOfHire}`);
  	console.log(`User Name: ${UPR.userName}`);
  	console.log(`Employee SAP#: ${UPR.empSapNr}`);
  	console.log(`Work Location: ${UPR.workLoc}`);
  	console.log(`Device Assign: ${UPR.deviceAssign}`);
  	console.log(`Device Asset Number: ${UPR.deviceAssetNr}`);
  	console.log(`Phone Assign: ${UPR.phoneAssign}`);
  	console.log(`Phone Assign2: ${UPR.phoneAssign2}`);
  	*/

  	/*
  	console.log(`Home Drive(H): ${UPR.homeDr}`);
  	console.log(`Department Share Drive(K): ${UPR.deptShareDr}`);
  	console.log(`Email: ${UPR.email}`);
  	console.log(`Name: ${UPR.name}`);
  	console.log(`SAP #: ${UPR.sapNr}`);
  	console.log(`Additional requirements: ${UPR.addReq}`);
  	console.log(`Additional requirements List: ${UPR.addReqList}`);
  	console.log(`Requrements Text: ${UPR.addReqText}`);
  	console.log(`Mainframe Access: ${UPR.mfAccess}`);
  	console.log(`Mainframe application access: ${UPR.mfAppAccList}`);
  	console.log(`Mainframe Text: ${UPR.mfText}`);
  	*/

  	console.log(`Requester: ${UPR.requester}`);
  	console.log(`Date: ${UPR.requesterDt}`);
  	console.log(`Dept. Head / Designee: ${UPR.deptHd_Designee}`);
  	console.log(`Date: ${UPR.dHdDt}`);
  }

}
