import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-form',
  templateUrl: './id-form.component.html',
  styleUrls: ['./id-form.component.css']
})
export class IDFormComponent implements OnInit {
  hide = true;
  IDForm = {
	requestType: {
      IDCard:'CoSA ID Card',
      facultyAccess: 'CoSA Faculty Access',
      cjisAccess: "CJIS Faculty Access",
      facultyAccChange: 'Faculty Access Change',
      issueID: 'Re-Issue ID Card'
    },
    personnelInfo: {
        First:'First Name:',
        middleNm: 'Middle Initial:',
        Last: 'Last Name:',
        Suffix: 'Suffix:',
        jobStatus:'Job Status:',
        workPhone:'Work Telephone Number:',
        jobTitle: 'Job Title:',
        Department:' Department:',
        hrSAP:'CoSA/HR SAP#:',
        Division: 'Division:',
        superNm: 'Supervisor/Manager Name:',
        contactPhone: 'Contact Phone Number:',
      },
    contractorVendorInfo: {
        companyName:'Company Name:',
        pointOfContact: 'Point of Contact Name',
        contactNum: 'Contact Number:',
        ContractNum: 'Contract Number:',
        contractExpr: 'Contract Expiration Date:',
      },
      facultyInfo: {
        facultyNm:'Faculty Name:',
        facultyAddr: 'Facility Address: ',
        facultyEntry: 'Facility Entry: ',
        suiteEntry: ' Suite Entry: ',
        roomEntry: ' Room Entry: ',
        other: 'Other: ',
      },
     departmentApprov: {
     superSign: 'Supervisor/Manager Signature: ',
     date: ' Date:'
   }

  }

  constructor() { }

  ngOnInit() {
  }

}
