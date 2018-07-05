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
	deviceAssetNr: false,
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
	
	mfAccess: false,
	mfAppAccList: false,
	

	// Signatures
	requestor: ``,
	requestorDt: ``,
	deptHd_Designee: ``,
	dHdDt: ``
  }

  constructor() { }

  ngOnInit() {
  }

  // log events to see if they are happening
  addToLog(UPR: userProvForm) {
  	//console.log(`Received output for department: ${UPR.department}`);
  	console.log(`Received output for Request Type: ${UPR.reqType}`);
  	//console.log(`Received output for Home Drive(H): ${UPR.homeDr}`);
  }

}
