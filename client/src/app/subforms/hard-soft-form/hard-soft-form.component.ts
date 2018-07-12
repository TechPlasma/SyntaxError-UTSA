import { Component, OnInit } from '@angular/core';
import { hardSoftForm  } from './hard-softModel'

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

		userName: `testing object!`,
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
	}//end hardSoftForm

  constructor() { }

  ngOnInit() { }



}
