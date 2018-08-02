import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import {Section2Choices,Section3Choices,Section4Choices} from './SapFormChoices';

const noop = () => {
};
/* 
Required Values.
*User Name  
*User’s COSA Network ID:  
*Date: 
*Department: 
*User’s SAP Employee Number: 

*Email Address:  
*Manager’s Name (Print):  
*Temporary Employee?  (Radio button?)
*Temporary Role Assignment? (Radio button?)
*/

// My stuff
        //array for validation. 
        //change to default to true, testing handles any switching. 
 let testValidInput: { isCorrect: boolean, name: string }[] = 
     [
    { "isCorrect": true, "name": "Section 1: General Info (Empty Choice Error)" },         //[0]
    { "isCorrect": true, "name": "COSA Network ID Error" },                //[1]
    { "isCorrect": true, "name": "Email Address Error" },                  //[2]
    { "isCorrect": true, "name": "Temporary Employee 'From' Date Error" }, //[3]
    { "isCorrect": true, "name": "Temporary Employee 'To' Date Error" },   //[4]
    { "isCorrect": true, "name": "Temporary Role 'From' Date Error" },     //[5]
    { "isCorrect": true, "name": "Work Location Error" },                  //[6]

    //harder part. Saul's group of checkboxes. 
    //
    { "isCorrect": true, "name": "Section 2: Department Roles Error" },     //[7]
    { "isCorrect": true, "name": "Section 3: Training Record Error" },      //[8]
    { "isCorrect": true, "name": "Section 4: Non-Central Roles Error" },    //[9]
    ];

   //boolean for completed check/validation.
   let finalCheck = true;
//END my stuff

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SAPFormComponent),
    multi: true
};


@Component({
  selector: 'app-sap-form',
  templateUrl: './sap-form.component.html',
  styleUrls: ['./sap-form.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SAPFormComponent implements OnInit {

    section2Choices: Object; 
    section3Choices: Object; 
    section4Choices: Object; 

	checkCreditMemo(){
		if('Credit Memo Sales Order Approver (Select option below)' in this.SubFormData['Accounts Receivable']){
			return true;
		}else{
			return false;
		}
	}


	alert(value){
		console.log(value);
	}


	//The internal data model
    private innerValue: any = '';

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get SubFormData(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set SubFormData(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    verifySubForm()
    {
        //reset finalCheck to true per call. 
        //This is for the user to have multiple attempts to verify the form.
        finalCheck = true;
        if(!this.SubFormData.formReason)
        {
            //testValidInput
            testValidInput[0].isCorrect = false;
        }else{
            testValidInput[0].isCorrect = true;// handles an empty form.(Radiobutton.)
        }//end if

        //COSA Network ID
        //[INDEX: 1] = alpha numeric???? 
        if(this.SubFormData.userCOSAID.match(/^[a-zA-Z0-9]+$/)
            && this.SubFormData.userCOSAID.length <= 35)
        {
            testValidInput[1].isCorrect = true;
        }else{
            testValidInput[1].isCorrect = false;
        }//end verify for COSA Network Id 

        //Email.
        //[INDEX: 2] = special regex for Email. 
        if(this.SubFormData.emailAddr.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {
            testValidInput[2].isCorrect = true;
        }else{
            testValidInput[2].isCorrect = false;
        }//end verify Email Address


        //work location. Optional.
        //[INDEX: 6]
        if(this.SubFormData.workLocation.length > 1)
        {
            if(this.SubFormData.workLocation.match(/^[a-zA-Z0-9\s]+$/) 
                && !this.SubFormData.workLocation.match(/[\$\@\#\%\{\}^\&\*\(\)\-\=\+]+$/)
                && this.SubFormData.workLocation.length <= 35)
            {
                testValidInput[6].isCorrect = true;
            }else{ 
                testValidInput[6].isCorrect = false;
            }
        }else{
            testValidInput[6].isCorrect = true;//Option where Work Location was never entered at all
        }//end verify for the Optional WORK LOCATION. 

        //Temporary Employee Date OPTIONAL
        //[INDEX: 3 and 4] 'To' and 'From' errors
        //Only check them if the boolean for the checkbox is checked.
        if(this.SubFormData.tempEmp)
        {
            if(this.SubFormData.date instanceof Date)
            {
                testValidInput[3].isCorrect = true;
            }else{
                testValidInput[3].isCorrect = false;
            }//end verify Temporary Employee 'From' Date

            if(this.SubFormData.IDExpEnd instanceof Date)
            {
                testValidInput[4].isCorrect = true;
            }else{
                testValidInput[4].isCorrect = false;
            }
        }else{
            testValidInput[3].isCorrect = true;//Option where Dates were never chosen at all.
            testValidInput[4].isCorrect = true;//Option where Dates were never chosen at all.
        }//end verify for Temporary Employee Dates.

        //Temporary Role Date OPTIONAL
        //[INDEX: 5]
        if(this.SubFormData.tempRoleAssn)
        {
            if(this.SubFormData.tempRoleExp instanceof Date)
            {
                testValidInput[5].isCorrect = true;
            }else{
                testValidInput[5].isCorrect = false;
            }
        }else{
            testValidInput[5].isCorrect = true;//Option where Date was never chosen at all.
        }//end verify Temporary Role Date 

        
        /*HARDER PART: Some values initalized(exist) at start up, other initalize when selected. 
        WHY Saul? Why? Two different kinds of checks for two different inital values?
        The Checkbox Groups. Some have to check length, other check if they exists. WEIRD.
        Section 2 TESTING. [INDEX: 7] 
        Have to check if ANY item from the Section(see webpage) is selected. Just one is enough. 
        */
        if(this.SubFormData['Risk'].length >= 1 || this.SubFormData['Police/Fire Incentives'].length >= 1
            || this.SubFormData['Purchasing(Section2)']|| this.SubFormData['Time'].length >= 1
            || this.SubFormData['DHSI Only'].length >= 1 || this.SubFormData['Accounts Receivable/Sales & Distribution'].length >= 1
            || this.SubFormData['Permit Printing (Dept)'].length >= 1 || this.SubFormData['Collections'].length >= 1
            || this.SubFormData['Police Department Off Duty'] || this.SubFormData['Inventory'].length >= 1
            || this.SubFormData['Accounts Payable/Travel(Section2)'] || this.SubFormData['Controlling (CO)'].length >= 1
            || this.SubFormData['Finance(Section2)'] || this.SubFormData['Fixed Assets'].length >= 1
            || this.SubFormData['Funds Management'].length >= 1 || this.SubFormData['Projects(Section2)']
            || this.SubFormData['Business Information Warehouse (BW)'].length >= 1 || this.SubFormData['Aviation Only – Airline Statistics'].length >= 1
            || this.SubFormData['Plant Maintenance'].length >= 1 || this.SubFormData['Grants Management(Section2)']
            ) 
        {
            testValidInput[7].isCorrect = true;
        }else{
            testValidInput[7].isCorrect = false;
        }//END 'Section 2' verify. 
        
        //Section 3 TESTING
        //[INDEX: 8]   
        if(this.SubFormData['Purchasing(Section3)'] || this.SubFormData['Grants Management(Section3)'])
        {
            testValidInput[8].isCorrect = true;
        }else{
            testValidInput[8].isCorrect = false;
        }//END verify Section 3 

        //Section 4 TESTING
        //[INDEX: 9]
        if(this.SubFormData['Human Resources / HR Designee Approval'].length >= 1 
            || this.SubFormData['Department Roles Purchasing Designee Approval'].length >= 1
            || this.SubFormData['Emergency Operations'].length >= 1 || this.SubFormData['Accounts Receivable'].length >= 1
            || this.SubFormData['Accounts Payable/Travel(Section4)'] || this.SubFormData['Finance(Section4)']
            || this.SubFormData['Treasury'].length >= 1 || this.SubFormData['Payroll'].length >= 1
            || this.SubFormData['Grants Management(Section4)'] || this.SubFormData['Time and Attendance'].length >= 1
            || this.SubFormData['Projects(Section4)'] || this.SubFormData['Budget Department (Funds Management)'].length >= 1
            )
        {
            testValidInput[9].isCorrect = true;
        }else{
            testValidInput[9].isCorrect = false;
        }//END verify Section 3
       

        //VALIDATION. Loop through testValidInput array and look for errors.
        //If one is found, set fianlCheck to false. 
        for(let e of testValidInput)
        {
            if(e.isCorrect == false)
            {
                finalCheck = false;
                console.log(`${e.name}`);
            }
        }//END foor loop for testValidInput array.

        if(finalCheck == true)
        {
            this.SubFormData.Completed = true;
            console.log(this.SubFormData);

        }//end verify finalCheck.

    }//END verifySubForm Function.


	constructor() {
		this.section2Choices = Section2Choices;
		this.section3Choices = Section3Choices;
		this.section4Choices = Section4Choices;
	}

	ngOnInit() {
	}

}
