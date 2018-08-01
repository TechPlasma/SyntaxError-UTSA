import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { pCard, limReq} from './pcard-formModel'; 

const noop = () => {
};

        //array for validation. 
        //change to default to true, testing handles any switching. 
 let testValidInput: { isCorrect: boolean, name: string }[] = 
     [
    { "isCorrect": true, "name": "CoSA Email" },                   //[0]
    { "isCorrect": true, "name": "Role Details" },                 //[1]
    { "isCorrect": true, "name": "Comments" },                     //[2]
    { "isCorrect": true, "name": "Department Approver Name" },     //[3]
    { "isCorrect": true, "name": "Department SAP Nr" },            //[4]
    { "isCorrect": true, "name": "Reconciler Name" },              //[5]
    { "isCorrect": true, "name": "Reconciler SAP Nr" },            //[6]
    { "isCorrect": true, "name": "CardHolder First Name" },        //[7]
    { "isCorrect": true, "name": "CardHolder Last Name" },         //[8]
    { "isCorrect": true, "name": "Default Code" },                 //[9]
    { "isCorrect": true, "name": "Description" },                  //[10]
    { "isCorrect": true, "name": "Last Digits of Card Number" },   //[11]
    { "isCorrect": true, "name": "New CoSA Log on ID" },           //[12]
    { "isCorrect": true, "name": "New First Name" },               //[13]
    { "isCorrect": true, "name": "New Middle Name" },              //[14]
    { "isCorrect": true, "name": "New Last Name" },                //[15]
    { "isCorrect": true, "name": "New Suffix" },                   //[16]

    //dropdown menus. FORGOT about them. 
    { "isCorrect": true, "name": "Limits Requested" },             //[17]
    { "isCorrect": true, "name": "Temporary Date" },               //[18]
    { "isCorrect": true, "name": "Role" },                         //[19]
    { "isCorrect": true, "name": "Default Cost Type" },            //[20]
    ];


    //boolean for completed check/validation.
   let finalCheck = true;

 
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PCardFormComponent),
    multi: true
};

//import pCard class from pcard-formModel. Holds all the data for fields. 

//  NOTE: CHECKBOXES DO NOT CURRENTLY WORK. ASK TEAMMATES FOR IDEAS. 
@Component({
  selector: 'app-pcard-form',
  templateUrl: './pcard-form.component.html',
  styleUrls: ['./pcard-form.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class PCardFormComponent implements OnInit {

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
        //Lots of reactive fields. Bif if statement blocks.
        if(this.SubFormData.requestFormType)
        {    
            //reset finalCheck boolean to true.
            //If any error is found in the inputs, it is set to false.
            finalCheck = true;

            //IF the form exists(is selected) get email regardless of choice.
            /* From S.O (lord and savior). Email regex
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)
                    |(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])
                    |(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            JUST GO WITH THE REGEX WITH EMAIL.
            */
            //CoSA Email [INDEX: 0] = email regex. See above. Special, well known CS problem.
            if(this.SubFormData.cosaEmail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            {
                testValidInput[0].isCorrect = true;
            }else{
                testValidInput[0].isCorrect = false;
            }

            //Comments. Used in nearly all possible form branches.
            //[INDEX : 2] = alphanumeric ?
            if(this.SubFormData.formComments)
            {    if(this.SubFormData.formComments.match(/^[a-zA-Z0-9\s.,!?]+$/))
                    {
                        testValidInput[2].isCorrect = true;
                    }else{
                        testValidInput[2].isCorrect = false;
                    }//end inner if-else.
            }//end verify for Comments(if they exist)

            //BEGIN CODE BLOCK for a SHARED field. 'Role'. 
            //Role and role change are fields that appear in BOTH CEO Website Access and Carholder Maintenance.
            //roleDtails [INDEX: [1] = alphanumeric.             
            if(this.SubFormData.requestFormType == 'CEO Website Access'
                || (this.SubFormData.requestFormType == 'CardHolder Maintenance' 
                    && this.SubFormData.chRoleChange == true) )
            {
                
                //Verify that a Role was selected at all.
                //[INDEX: 19]
                if(this.SubFormData.role.length > 1){
                    testValidInput[19].isCorrect = true;
                  }else{
                      testValidInput[19].isCorrect = false;
                    }//end if-else for verify a Role was selected.

                
                //reactive field. Only for Role = Approver or Reconciler. 
                if(this.SubFormData.role == 'Approver' || this.SubFormData.role == 'Reconciler')
                {
                    if(this.SubFormData.roleDetails.match(/^[a-zA-Z0-9\s.,!?]+$/) 
                          && this.SubFormData.roleDetails.length <= 35)
                    {
                        testValidInput[1].isCorrect = true;
                    }else{
                        testValidInput[1].isCorrect = false;
                    }//end if else.
                }//end inner if that trigger for 'roleDetails'. 

            }//END SPECIAL IF : testing for CEO Website Access + CardHolder Maintenance shared field. 

            //CODE BLOCK: ONLY for 'New Credit Card Request'
            if(this.SubFormData.requestFormType == 'New Credit Card Request')
            {
                //Dept Approver Name for Cardholder [INDEX: 3] = alphanumeric
                if(this.SubFormData.deptAppChName.match(/^[a-zA-Z0-9\s.,!?]+$/)
                    && this.SubFormData.deptAppChName.length <=30)
                {
                    testValidInput[3].isCorrect = true;
                }else{
                    testValidInput[3].isCorrect = false;
                }//end verify Department Approver Name for Card Holder. 

                //Dept Arrover Sap Nr for Cardholder [INDEX: 4] 
                // the field = numeric values. 6 characters max?
                // checks for 1 to 6 numbers, NO other characters, and length.
                if(this.SubFormData.deptAppChSapNm.match(/\d{1,6}/)
                    && !this.SubFormData.deptAppChSapNm.match(/\D+/)
                    && this.SubFormData.deptAppChSapNm.length <= 6)
                {
                    testValidInput[4].isCorrect = true;
                }else{
                    testValidInput[4].isCorrect = false;
                }//end verify Department Approver SAP Nr.

                //Reconciler Fields. Reactive, appear if checkbox is selected.
                //Reconciler Name [INDEX: 5] = 30 alpha characters
                //    - /^[a-zA-z]+$/ should handle ONLY alpha characters.
                //Reconciler SAP Nr [INDEX: 6] = 6 numberic characters
                //    - /\d+/{1,6} with not(/\D/+) should handle ONLY numeric characters.
                if(this.SubFormData.reconcilerBoolean == 'true')
                {
                    if(this.SubFormData.reconcilerName.match(/^[a-zA-z\s]+$/) 
                        && this.SubFormData.reconcilerName.length <= 30)
                    {
                        testValidInput[5].isCorrect = true;
                    }else{
                        testValidInput[5].isCorrect = false;
                    }//end verify Reconciler Name. 

                    if(this.SubFormData.reconcilerSapNm.match(/\d{1,6}/)
                        && !this.SubFormData.reconcilerSapNm.match(/\D+/)
                        && this.SubFormData.reconcilerSapNm.length <= 6)
                    {
                        testValidInput[6].isCorrect = true;
                    }else{
                        testValidInput[6].isCorrect = false;
                    }//end verify Reconciler SAP number

                }//end Reconciler fields. REACTIVE.

                //cardHolder Set up. CardHolder First Name.
                //[INDEX: 7]
                if(this.SubFormData.chFirstName.match(/^[a-zA-z]+$/)
                    && this.SubFormData.chFirstName.length <= 25)
                {
                    testValidInput[7].isCorrect = true;
                }else{
                    testValidInput[7].isCorrect = false;
                }
                //end verify CardHolder Last Name. 
                //cardHolder Set up. CardHolder Last Name.
                //[INDEX: 8]
                if(this.SubFormData.chLastName.match(/^[a-zA-z]+$/)
                    && this.SubFormData.chLastName.length <= 25 )
                {
                    testValidInput[8].isCorrect = true;
                }else{
                    testValidInput[8].isCorrect = false;
                }//end verify Cardholder Last Name.

                //Accounting Codes. Verification.
                //CHECK if Default Cost Type even exist(chosen from dropdown menu.)
                //[INDEX: 20]
                    if(this.SubFormData.defCostType.length > 1)
                    {
                        testValidInput[20].isCorrect = true;
                    }else{
                        testValidInput[20].isCorrect = false;
                    }//end inner if-else
                //end verify if Default Cost Type exist (was selected.)

                //Default Code[INDEX: 9] = 15 alpha numeric characters.
                if(this.SubFormData.defCostType != null 
                    && this.SubFormData.defCode.match(/^[a-zA-Z0-9\s.]+$/)
                    && this.SubFormData.defCode.length <= 15)
                    
                {
                    testValidInput[9].isCorrect = true;
                }else{
                    testValidInput[9].isCorrect = false;
                }//end verify default code.

                //Description might be optional.
                //[INDEX: 10]
                if(this.SubFormData.description != null)
                {
                    //verify the descirption. Alpha numeric?
                    if(this.SubFormData.description.match(/^[a-zA-Z0-9\s.,?!]+$/)
                        && this.SubFormData.description.length <= 35)
                    {
                        testValidInput[10].isCorrect = true;
                    }else{
                        testValidInput[10].isCorrect = false;
                    }//end inner if. IF descirption is entered, it checks it. 
                }//end verify for Description(if it exists)

                //CHECK if Limits Requested is chosen at all.
                //Limits Requested(dropdown menu) 
                //[INDEX: 17] 
                if(this.SubFormData.limitsRequested.length > 1)
                {
                    testValidInput[17].isCorrect = true;
                }else{
                    testValidInput[17].isCorrect = false;
                }//end verify Limits Requested

                //That should end all verified fields for new cardHolder.

            }//END verify 'New Credit Card Request' ONLY fields. 

            //CODE BLOCK: 'CardHolder Maintence' ONLY fields.
            if(this.SubFormData.requestFormType == 'CardHolder Maintenance')
            {
                //last 4 digits of Card Number.
                //[INDEX: 11]
                if(this.SubFormData.chlastFourCardDigits.match(/\d+/)
                    && this.SubFormData.chlastFourCardDigits.length == 4 )
                {
                    testValidInput[11].isCorrect = true;
                }else{
                    testValidInput[11].isCorrect = false;
                }//end verify for Last 4 Digits of Card Number

                //Change is Permnant or Temporary.
                // If temporary, check for date.
                // If permnant, go through.
                //Hmm. yes if for Temporary, and another for either per/temp.

                //Temp date. [INDEX: 18]
                if(this.SubFormData.chChange == 'Temporary / Return Date')
                {
                    if(this.SubFormData.tempDate instanceof Date)
                    {
                        testValidInput[18].isCorrect = true;
                    }else{
                        testValidInput[18].isCorrect = false;
                    }
                }else{
                    testValidInput[18].isCorrect = true;//option where TempDate wasn't chosen at all.
                }//end tempDate check.

                if(this.SubFormData.chChange == 'Permanent' 
                    || this.SubFormData.chChange == 'Temporary / Return Date')
                {
                    //ALL REACTIVE FIELDS for changes.

                    //"Change Profile Transaction Limits"
                    //Reused old code from Cardholder Maintence. Not efficient just easier.
                    if(this.SubFormData.chTransLimits == true)
                    {
                        if(this.SubFormData.limitsRequested.length > 1)
                        {
                            //console.log(`IF state Line 305. val= ${this.SubFormData.limitsRequested.length}`);
                            testValidInput[17].isCorrect = true;
                        }else{
                            testValidInput[17].isCorrect = false;
                        }//end inner if. Verify for limits
                    }//end verify for Change Profile Transaction Limits.

                    //Cardholder or User Name Changes.
                    if(this.SubFormData.chName == true)
                    {
                        //User LogOn. Badly named variable 'NewUserName'
                        //[Index: 12] = alpha numeric 8 characters
                        if(this.SubFormData.newUserName.match(/^[a-zA-Z0-9\s]+$/)
                            && this.SubFormData.newUserName.length <= 8){
                            testValidInput[12].isCorrect = true;
                        }else{
                            testValidInput[12].isCorrect = false;
                        }//end verify CoSA LogON

                        //New User First Name. 30 Alpha  
                        //[INDEX: 13]
                        if(this.SubFormData.newChFirstName.match(/^[a-zA-Z\s]+$/)
                            && this.SubFormData.newChFirstName.length <= 30)
                        {
                            testValidInput[13].isCorrect = true;
                        }else{
                            testValidInput[13].isCorrect = false;
                        }//end verify of New User First Name.

                        //New User Last Name. 30 Alpha .
                        //[INDEX: 15]
                        if(this.SubFormData.newChLastName.match(/^[a-zA-Z\s]+$/)
                            && this.SubFormData.newChLastName.length <= 30){
                            testValidInput[15].isCorrect = true;
                        }else{
                            testValidInput[15].isCorrect = false;
                        }//end verify New User Last Name

                        //OPTIONALLY Middle Name 30 Alpha.
                        //[INDEX: 14]
                        if(this.SubFormData.newChMiddleName.length > 1)
                        {
                            if(this.SubFormData.newChMiddleName.match(/^[a-zA-Z\s]+$/)
                                &&this.SubFormData.newChMiddleName.length <= 30)
                            {
                                testValidInput[14].isCorrect = true;
                            }else { 
                               testValidInput[14].isCorrect = false;
                            } 
                        }else{
                            testValidInput[14].isCorrect = true; //Option with no middle name entered.
                        }//end optional verify New User Middle Name

                        //OPTIONALLY Suffix: 
                        //[INDEX: 16] = alpha characters. Limit??? I put 8?
                        if(this.SubFormData.newChSuffix.length > 1)
                        {
                            if(this.SubFormData.newChSuffix.match(/^[a-zA-z\s.]+$/)
                                && this.SubFormData.newChSuffix.length <= 8)
                            {
                                testValidInput[16].isCorrect = true;
                            }else{
                                testValidInput[16].isCorrect = false;
                            }//end inner if-else.
                        }else{
                            testValidInput[16].isCorrect = true;//Option with no suffix entered.
                        }//end optional verify New User Suffix
                    }//end CardHolder/User Name Change reactive field Verification. 

                }//end reactive fields for Maintenance
            }//CODE BLOCK for 'CardHolder Maintenance' fields.

        //VALIDATION. Loop through testValidInput array and look for errors.
        //If one is found, set fianlCheck to false. 
        for(let e of testValidInput)
        {
            if(e.isCorrect == false)
            {
                    finalCheck = false;
                    console.log(`TESTING changes. ${e.name} is ${e.isCorrect}`);
            }
        }//END foor loop for testValidInput array.

        if(finalCheck == true)
        {
            this.SubFormData.Completed = true;
            console.log(this.SubFormData);
            console.log(`CLEARED. All valid inputs.`);
        }

        }//end BIG IF for if the Form even exist.     
    }//end VERIFY FUNCTION.

  

  constructor() {

    }

    ngOnInit(){

    }

}
