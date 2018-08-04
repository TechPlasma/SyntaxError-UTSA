import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};
 
 //new array for verify function.
 let testValidInput: { isCorrect: boolean, name: string }[] = 
     [
         { "isCorrect": true, "name": "Empty Form Error" },               //[0]
         { "isCorrect": true, "name": "Logon ID Error" },                 //[1]
         { "isCorrect": true, "name": "SAP# Error" },                     //[2]
         { "isCorrect": true, "name": "Separation Date Error" },          //[3]
         { "isCorrect": true, "name": "User Provisioning Choice Error" }, //[4]
         { "isCorrect": true, "name": "Date of Hire Error" },             //[5]
         { "isCorrect": true, "name": "Work Location Error" },            //[6]
         { "isCorrect": true, "name": "Device Assignment Error" },        //[7]
         { "isCorrect": true, "name": "Device Asset # Error" },           //[8]
         { "isCorrect": true, "name": "Phone Assignment Error" },         //[9]
         { "isCorrect": true, "name": "Phone Ext Error" },               //[10]
         { "isCorrect": true, "name": "Mac Addr Error" },                //[11]
         { "isCorrect": true, "name": "Serial Nr Error" },               //[12]
         { "isCorrect": true, "name": "Service Center Choice Error: Select yes or no" },   //[13]
         { "isCorrect": true, "name": "Service Center Error" },          //[14]
         { "isCorrect": true, "name": "Email: Name Error" },             //[15]
         { "isCorrect": true, "name": "Email: SAP # Error" },            //[16]
         { "isCorrect": true, "name": "Addition Requirements Error" },   //[17]
         { "isCorrect": true, "name": "Mainframe Access Error" },        //[18]
     ];
     //boolean for completed check/validation.
  //basic flag to signal if form is valid or not. Final check. 
 let finalCheck = true;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UserFormComponent),
    multi: true
};

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.css'],
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class UserFormComponent implements OnInit {

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
        //reset finalCheck flat. This allows multiple verify attempts.
        finalCheck = true;

        //Error handles Users whom change form type without clearing values. Resets the validation array.
        //STILL does testing below so shouldn't have any conflicts.
        for(let s of testValidInput){ 
            s.isCorrect = true;
        }
     
        if(this.SubFormData)
        {
            
            if(this.SubFormData.reqType != 'Provision User' && this.SubFormData.reqType != 'Disable User Account')
            {
                testValidInput[0].isCorrect = false;
            }else{
            testValidInput[0].isCorrect = true;
            }//end empty form verify. 

            //CODE BLOCK. 'Disable User Account' fields.
            if(this.SubFormData.reqType == 'Disable User Account')
            {
                //Logon ID
                //[INDEX : 1] = 8 alpha numeric characters
                if(this.SubFormData.logonID.match(/^[a-zA-Z0-9\s]+$/)
                    && this.SubFormData.logonID.length <= 8)
                {
                    testValidInput[1].isCorrect = true;
                }else{
                    testValidInput[1].isCorrect = false;
                }//end verify Logon ID. 

                /*
                //SAP Number. Weird, might need to discuss different SAP number variables.
                //[INDEX: 2] = 6 numeric characters
                if(this.SubFormData.sapNr.match(/\d{1,15}/)
                    && !this.SubFormData.sapNr.match(/\D+/) 
                    && this.SubFormData.sapNr.length <= 6)
                {
                    testValidInput[2].isCorrect = true;
                }else{
                    testValidInput[2].isCorrect = false;
                }//end verify SAP number.
                */

                
                //Separation Date
                //[INDEX: 3]
                if(this.SubFormData.separationDate instanceof Date)
                {
                    testValidInput[3].isCorrect = true;
                }else{
                    testValidInput[3].isCorrect = false;
                   }//end verify Separation Date
            }//END 'Disable User Account' fields.

            //CODE BLOCK: 'Provision User' testing.
            
            if(this.SubFormData.reqType == 'Provision User')
            {
                //User Provisioning Choice(radio button)
                //[INDEX: 4]
                if(this.SubFormData.userType)
                {
                    testValidInput[4].isCorrect = true;
                }else{
                    testValidInput[4].isCorrect = false;
                }//end verify

                //Date of Hire.
                if(this.SubFormData.dtOfHire instanceof Date)
                {
                    testValidInput[5].isCorrect = true;
                }else{
                    testValidInput[5].isCorrect = false;
                }//end verify Date of Hire.

                if(this.SubFormData.workLoc.match(/^[a-zA-Z0-9\s.,!?]+$/)
                    && this.SubFormData.workLoc.length <= 35)
                {
                    testValidInput[6].isCorrect = true;
                }else{
                    testValidInput[6].isCorrect = false;
                }//end verfiy work location.

                //Device TESTING.
                //Device Assignment test:
                //[INDEX: 7]
                if(this.SubFormData.deviceAssign)
                {
                    testValidInput[7].isCorrect = true;
                }else{
                    testValidInput[7].isCorrect = false;
                }//end verify device assignment . 

                //Device Asset #
                //[INDEX: 8]
                if(this.SubFormData.deviceAssign == 'true') 
                {
                   if(this.SubFormData.deviceAssetNr.match(/\d+/)
                        && !this.SubFormData.deviceAssetNr.match(/\D+/)
                        && this.SubFormData.deviceAssetNr.length <= 35)
                   {
                       testValidInput[8].isCorrect = true;
                   }else{
                    testValidInput[8].isCorrect = false;
                    }//end verify inner if-else for Device Asset #
                }else{
                    testValidInput[8].isCorrect = true;//Option where Device Assign is false, so no Asset #. 
                }//end verify Device Asset # testing.

                //Phone TESTING
                //Phone Assignment test:
                //[INDEX: 9]
                if(this.SubFormData.phoneAssign)
                {
                    testValidInput[9].isCorrect = true;
                }else{
                    testValidInput[9].isCorrect = false;
                }//end verify Phone Assignment (radiobutton)

                //Phone Assignment Reactive Fields.
                if(this.SubFormData.phoneAssign == 'true')
                {
                    //Phone Ext: 
                    //[INDEX: 10] = numeric???. Phone stuff. TEST more. 
                    if(this.SubFormData.phoneExt.match(/^[0-9\s-\(\)]+$/)
                        && !this.SubFormData.phoneExt.match(/^[a-zA-z]+$/)
                        && this.SubFormData.phoneExt.length <= 15)
                    {
                        testValidInput[10].isCorrect = true;
                    }else{
                        testValidInput[10].isCorrect = false;
                    }//end verify Phone Ext:

                    if(this.SubFormData.macAddr.match(/^[a-zA-Z0-9\s-]+$/)
                        && this.SubFormData.macAddr.length <= 20)
                    {
                        testValidInput[11].isCorrect = true;
                    }else{
                        testValidInput[11].isCorrect = false;
                    }//end verify Mac Addr

                    //Serial Nr:
                    //[INDEX: 12] = alpha-numeric????
                    if(this.SubFormData.serialNr.match(/^[a-zA-z0-9\s-\#]+$/)
                        && this.SubFormData.serialNr.length <= 15)
                    {
                        testValidInput[12].isCorrect = true;
                    }else{
                        testValidInput[12].isCorrect = false;
                    }//end verify Serial Nr

                }else{
                    //bunch of true statements for option where Phone Assignemnt never chosen at all.
                    testValidInput[10].isCorrect = true;
                    testValidInput[11].isCorrect = true;
                    testValidInput[12].isCorrect = true;
                }//END Phone Assignment TESTING. 

                //Service Center Agent or Supervisor testing. User must select 'yes' or 'no'
                //[INDEX: 13]
                if(this.SubFormData.phoneAssign2)
                {
                    testValidInput[13].isCorrect = true;
                }else{
                    testValidInput[13].isCorrect = false;
                }//end verify Service Center Agent.

                //Service Center Agent or Supervisor input testing. The field itself.
                if(this.SubFormData.phoneAssign2 == 'true')
                {
                    if(this.SubFormData.contactServiceName.match(/^[a-zA-Z0-9\s.,!?]+$/)
                        && this.SubFormData.contactServiceName.length <= 35)
                    {
                        testValidInput[14].isCorrect = true;
                    }else{
                        testValidInput[14].isCorrect = false;
                    }//end inner if-else verify.
                }else{
                    testValidInput[14].isCorrect = true;//Option where user selected 'no'.
                }//END Service Center Agent testing. 

                //Email TESTING.
                if(this.SubFormData.email)
                {
                    //EMAIL name.
                    //[INDEX: 15]
                    if(this.SubFormData.name.match(/^[a-zA-Z\s]+$/))
                    {
                        testValidInput[15].isCorrect = true;
                    }else{
                        testValidInput[15].isCorrect = false;
                    }//end verify 'name' field for Email checkbox

                
                    /*
                    //EMAIL SAP #
                    //[INDEX: 16]
                    if(this.SubFormData.sapNr.match(/\d+/)
                        && !this.SubFormData.sapNr.match(/\D+/)
                        && this.SubFormData.sapNr.length <= 6)
                    {
                        testValidInput[16].isCorrect = true;  
                    }else{
                        testValidInput[16].isCorrect = false;
                        }//end verify 'SAP #' field for email.
                    */
                 }else{
                        //true statements for when Email was never selected as an option.
                        testValidInput[15].isCorrect = true;
                        testValidInput[16].isCorrect = true;
                    }//END Email Testing.
                
                

                //Additional Requirements + field.
                if(this.SubFormData.addReq)
                {      
                    //Additional Requirements: Alpha numeric?
                    //[INDEX: 17]
                    if(this.SubFormData.addReqText.match(/^[a-zA-Z0-9\s.,!?]+$/)
                        && this.SubFormData.addReqText.length > 1)
                    {
                        testValidInput[17].isCorrect = true;
                    }else{
                        testValidInput[17].isCorrect = false;
                    }
                }else{
                    //true statement for when Additional Requirements was never selected.
                    testValidInput[17].isCorrect = true;
                }//end Additional Requirements testing.

                //Mainframe Testing.
                //[INDEX: 18]
                if(this.SubFormData.mfAccess)
                {
                    //Mainframe field Testing.
                    if(this.SubFormData.mfText.match(/^[a-zA-Z0-9\s.,!?]+$/))
                    {
                        testValidInput[18].isCorrect = true;
                    }else{
                        testValidInput[18].isCorrect = false;
                    }//end verify Mainframe feild.
                }else{
                    //true statement for when Mainframe Access was never selected.
                    testValidInput[18].isCorrect = true;
                }


            }//end 'Provision User' testing.
        }//end main if.



        for(let e of testValidInput)
        {
            if(e.isCorrect == false){
                finalCheck = false;
                console.log(`${e.name}`);
            }
        }//end for loop for validation.

        if(finalCheck == true)
        {
            this.SubFormData.Completed = true;
            console.log(this.SubFormData);
        }//end finalCheck if.
        
    }//end verifySubForm function.

	

	constructor(){
    }

    ngOnInit(){

    }
}
