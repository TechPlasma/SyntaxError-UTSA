import { Component, OnInit } from '@angular/core';
import { hardSoftForm, SpecialSoftware  } from './hard-softModel'

@Component({	
  selector: 'app-hard-soft-form',
  templateUrl: './hard-soft-form.component.html',
  styleUrls: ['./hard-soft-form.component.css']
})
export class HardSoftFormComponent implements OnInit {
	
	hsForm: hardSoftForm = {
		//request info. 
		department: ``,
		date: null,
		depRequestor: ``,
		phoneExt: ``,

		//checkboxs:
		provHardware: false,
		provSoftware: false,

		//fields for those checkboxs:
		hardCostCenterIO: ``,
		hardGlAcc: ``,

		softCostCenterIO: ``,
		softGlAcc: ``,

		//Hardware -- Provisioning (assigned) Fields. 
		userName: ``,
		SAPLogonId: ``,
		formPosition: ``,

		BldgLoc: ``,
		floor: ``,
		office: ``,

		requestType: ``,
		currentDeviceId: ``, 
		//box = Checkbox and Input = dropdown menu or basic input. 
		desktopBox: false,
		desktopInput: ``,

		laptopBox: false,
		laptopInput: ``,
		//Laptop box onlocks new checkboxes.
		dockingStation: false,
		keyMouse: false,
		addMonitor: false,

		monitorBox: false,
		monitorInput: ``,
		//monitor checkbox unlocks a 'Mode' dropdown menu. 
		monitorMode: ``,
		
		printerBox: false,
		printerInput: ``,
		ipDeskPhoneBox: false,
		ipDeskPhoneInput: ``,

		otherBox: false,
		otherInput: ``,

		softwareOtherBox: false,
		softwareOtherInput: ``,

		specialSoftware: [],

		userId: ``,
		userPassword: ``,

		requestor: ``,
		requestorDate: null,
		deptDFA: ``,
		dfaDate: null,
		deptHead: ``,
		headDate: null,

	// (string|number)[] = [ 1, "message" ];
	}//end hardSoftForm

	remove(array,element){
		return array.filter(e => e !== element);
	}

	delete(element){
		this.hsForm.specialSoftware = this.remove(this.hsForm.specialSoftware,element);
	}


  constructor() { }

  ngOnInit() { }

  addSoftware(){
  	console.log(this.hsForm);
  	let newEntry = new SpecialSoftware();
  	newEntry.softDesc = '';
  	newEntry.loginID = '';
  	this.hsForm.specialSoftware.push(newEntry);

  }


}
