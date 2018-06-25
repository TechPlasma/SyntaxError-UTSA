import { Component, OnInit } from '@angular/core';
import { pCard} from './pcard-formModel'; 
//import pCard class from pcard-formModel. Holds all the data for fields. 

//  NOTE: CHECKBOXES DO NOT CURRENTLY WORK. ASK TEAMMATES FOR IDEAS. 
@Component({
  selector: 'app-pcard-form',
  templateUrl: './pcard-form.component.html',
  styleUrls: ['./pcard-form.component.css']
})
export class PCardFormComponent implements OnInit {
	//pcard object set with default value. 
  pcard: pCard = {
    webAccessOnly: false,
    newCardRequest: false,
    chMaintenance: false,
    firstName: ``,
    middleName: ``,
    lastName: ``,
    suffix: ``,
    userName: ``,
    cosaEmail: ``,
    sapEmpId: ``,
    dept: ``,
    deptAppChName: ``,
    deptAppChSapNm: ``,
    reconcilerBoolean: false,
    chFirstName: ``,
    chLastName: ``,
    defCostType: ``,
    defCode: ``,
    description: ``,
    limitsRequested: ``,
    formComments: ``,
    sigBox: false,
    userID: ``,
    password: ``,
    deptAdmin: ``,
    date: ``,
  };

  constructor() {}//end constructor. 
  	
  	//fill out this constructor AND the pcard-formModel.ts constructor.
  	//defaults to an empty string.  

   ngOnInit() {
   }

   addToLog(pcard: pCard){
     console.log(`Hello there, from pcard-form. ${pcard.firstName}`);
     console.log(`And last name is: ${pcard.lastName}`);
     console.log(`email test is: ${pcard.cosaEmail}`);
   }
   /*  // FOR CHECKBOXES: Need to call this function if first checkbox is chosen. 
   toCallCheck1(pcard: pCard){
     console.log(`Hey you pressed the checkbox! Good old boy.`);
   }
   */ 

  // idea for calling function to get back when user typed into fields. ????????? See book. 

}
