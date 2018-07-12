import { Component, OnInit } from '@angular/core';
import { pCard, limReq} from './pcard-formModel'; 
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
    requestFormType: ``,
    ceoWebAccessOnly: false,
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
    role: ``,
    roleDetails: ``,
    deptAppChName: ``,
    deptAppChSapNm: ``,
    reconcilerBoolean: false,
    reconcilerName: ``,
    reconcilerSapNm: ``,
    chFirstName: ``,
    chLastName: ``,

    tempDate: ``,
    chChange: ``,
    chTransLimits: false,
    chName: false,
    chRoleChange: false,
    chlastFourCardDigits: null,

    // stuff for changing card holder fields.
    newUserName: ``,
    newChFirstName: ``,
    newChMiddleName: ``,
    newChLastName: ``,
    newChSuffix: ``,

    defCostType: ``,
    defCode: ``,
    description: ``,
    
    limitsRequested:``,
    limitExplain: ``,

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

   /*
        CHECKBOX FIXED.
        - Checkbox can be set to [(ngModel)]="pcard.sigBox".
        - this means that box is checked, it changes the default value
          of the pcard.variable to true.
        - If box is unchecked, then it returns to a false.
        - I tested this via the console prints in "addToLog".
        - it works!
   */
   addToLog(pcard: pCard){
     console.log(`Hello there, from pcard-form. ${pcard.firstName}`);
     console.log(`And last name is: ${pcard.lastName}`);
     console.log(`email test is: ${pcard.cosaEmail}`);
     
     console.log(`CHECKBOX 1: CEO Website Access is ${pcard.ceoWebAccessOnly}`);
     console.log(`CHECKBOX 2: New Card Request is ${pcard.newCardRequest}`);
     console.log(`CHECKBOX 3: Cardholder Maintenance is ${pcard.chMaintenance}`);

     console.log(`dropdown menu: Dept is.${pcard.dept} `);

     console.log(`boolean test. Checkbox. Sig is ${pcard.sigBox}`);

     console.log(`RADIO button: testing. value is ${pcard.reconcilerBoolean}`);

     console.log(`User password is ${pcard.password} `);

     console.log(`Date thing is: ${pcard.date}`);

     console.log(`Temp Date is: ${pcard.tempDate}`);


     // console.log(`Limits Requested: is ${pcard.limitsRequested}`);
   }

}
