import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { hardSoftForm, SpecialSoftware  } from './hard-softModel'

const noop = () => {
};

        //array for validation. 
        //change to default to true, testing handles any switching. 
 let testValidInput: { isCorrect: boolean, name: string }[] = 
     [
    { "isCorrect": true, "name": "hardware CostCenterIO Error" },      //[0]
    { "isCorrect": true, "name": "Hardware GlAcc Error" },             //[1]
    { "isCorrect": true, "name": "Software CostCenterIO Error" },      //[2]
    { "isCorrect": true, "name": "Software GlAcc Error" },             //[3]
    { "isCorrect": true, "name": "BldgLoc Error" },                    //[4]
    { "isCorrect": true, "name": "Floor Error" },                      //[5]
    { "isCorrect": true, "name": "Office Error" },                     //[6]
    { "isCorrect": true, "name": "Current Device ID Error" },          //[7]
    { "isCorrect": true, "name": "'Other' Error" },                    //[8]
    { "isCorrect": true, "name": "(SOMETHING) Other Error" },           //[9]
    { "isCorrect": true, "name": "Special Software Table Error" },     //[10]
    //left out fields. 
    { "isCorrect": true, "name": "Empty Form Error." },                //[11]
    { "isCorrect": true, "name": "Desktop Error" },                    //[12]
    { "isCorrect": true, "name": "Laptop Error" },                     //[13]
    { "isCorrect": true, "name": "Monitor Mode Error" },               //[14]
    { "isCorrect": true, "name": "Monitor Error" },                    //[15]
    { "isCorrect": true, "name": "IP Desk Phone Error" },              //[16]
    { "isCorrect": true, "name": "(Hardware) Other Error" },           //[17]
    { "isCorrect": true, "name": "(Hardware) Request Type Error" },    //[18]

    ];

    //boolean for completed check/validation.
   let finalCheck = true;
 
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HardSoftFormComponent),
    multi: true
};


@Component({	
  selector: 'app-hard-soft-form',
  templateUrl: './hard-soft-form.component.html',
  styleUrls: ['./hard-soft-form.component.css'],
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class HardSoftFormComponent implements OnInit {


	remove(array,element){
		return array.filter(e => e !== element);
	}

	delete(element){
		this.SubFormData.specialSoftware = this.remove(this.SubFormData.specialSoftware,element);
	}
	addSoftware(){
		console.log(this.SubFormData);
		let newEntry = new SpecialSoftware();
		newEntry.softDesc = '';
		newEntry.loginID = '';
		this.SubFormData.specialSoftware.push(newEntry);

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
        //reset finalCheck boolean to true.
        //If any error is found in the inputs, it is set to false.
        finalCheck = true;

        if(this.SubFormData)
        {
            //Simple check that denies an empty form.
            if(this.SubFormData.provHardware == false && this.SubFormData.provSoftware == false)
            {
                testValidInput[11].isCorrect = false;
            }else{
                testValidInput[11].isCorrect = true;
            }
            /*ERROR HANDLING. 
            A Reset option so User can check and uncheck main Form branches.
            - Thus user can switch without trigger all the tests involved that branch that
                was checked and then unchecked. 
            - NOT SURE WHY: Only seems to be a problem when Hardware Provisioning is checked and then
                unchecked. Weird behavior.
            */
            if(this.SubFormData.provHardware == false && this.SubFormData.provSoftware == true)
            {
                for(let i of testValidInput)
                {
                    i.isCorrect = true;
                }
            }

            /*
            TWO big if statements for Hardware and Software reactive fields.
                Various testing(regex) for those reactive fields.
            These test edit our testValidInput array and set isCorrect boolean to true or false
            as needed. 
            Final lines of function code check entire array, if any error is found, it sets a 
            completion boolean(finalCheck) to false and prints invalid input.
                - else it is set to true and verfies the form. 
            */


            if(this.SubFormData.provHardware == true)
            {
                //Hardware Cost center / I/O[INDEX: 0] = 15 numeric characters
                //    - check for 15 numbers, so /\d{15}/ for 15 digits 
                //        and no other characters so !(/\D+/). 
                if(this.SubFormData.hardCostCenterIO.match(/\d{1,15}/)
                &&  !this.SubFormData.hardCostCenterIO.match(/\D+/)
                && this.SubFormData.hardCostCenterIO.length <= 15 ){
                     //Index value  is known, see above, so just reference it. :)
                    testValidInput[0].isCorrect = true;                  
                    }else{
                        testValidInput[0].isCorrect = false;
                    }
                    //end hardware cost center TESTING:

                //Hardware GlAcc[INDEX: 1] = 15 numberic characters
                //    - check for 15 numbers, so /\d{15}/ for 15 digits 
                //        and no other characters so !(/\D+/).
                if(this.SubFormData.hardGlAcc.match(/\d{1,15}/)
                   &&  !this.SubFormData.hardGlAcc.match(/\D+/) 
                   && this.SubFormData.hardGlAcc.length <= 15){
                            testValidInput[1].isCorrect = true;
                    }else{ 
                        testValidInput[1].isCorrect = false; 
                    }
                    //END hardware GlAcc testing:

                // Bldg Location[INDEX: 4] =  35 alpha/numeric characters
                //    From S.O. regex: "^[a-zA-Z0-9\s.,!?]+$"
                    /*
                        ^ : start of string
                        [ : beginning of character group
                        a-z : any lowercase letter
                        A-Z : any uppercase letter
                        0-9 : any digit
                        \s : any whitespaces
                        . : any periods
                        , : any comas
                        ! : any exclamation points
                        ? : any question marks.
                        ] : end of character group
                        + : one or more of the given characters
                        $ : end of string
                        NOTE: I used + instead of * to not allow empty strings. 
                    */
                if(this.SubFormData.BldgLoc.match(/^[a-zA-Z0-9\s.,!?]+$/)
                    && this.SubFormData.BldgLoc.length <= 35){
                        testValidInput[4].isCorrect = true;
                    }else{ 
                        testValidInput[4].isCorrect = false;
                    }//END Blgd TESTING. 


                //Floor [INDEX: 5] = floor input has 1 or two numbers, and not letters.
                // floor should a string of length 2 or less.
                // 1 or 2 digits.
                // use of ! functionality. So ONLY digits via using not((/\D+/).
                if(this.SubFormData.floor.match(/\d{1,2}/) && !this.SubFormData.floor.match(/\D+/)
                            && this.SubFormData.floor.length <= 2 ){
                            testValidInput[5].isCorrect = true;              
                    }else{
                        testValidInput[5].isCorrect = false; 
                    }
                    //END Floor validation. 

               // office[INDEX: 6]= 10 alpha/numeric characters.
                // Use alpha numberic (SEE Bldg Location testing regex.) 
                // but Modified to only allow periods as an extra.
                if(this.SubFormData.office.match(/^[a-zA-Z0-9\s.]+$/)
                 && this.SubFormData.office.length <= 10)
                {
                    testValidInput[6].isCorrect = true;
                }else{
                    testValidInput[6].isCorrect = false;
                }//END office validation TESTING.

                //Request Type. 
                //[INDEX: 18]
                if(this.SubFormData.requestType.length > 1)
                {
                    testValidInput[18].isCorrect = true;
                }else{
                    testValidInput[18].isCorrect = false;
                }

                // Current Device('Asset' Tag)[INDEX: 7] = 12 numeric characters
                if(this.SubFormData.currentDeviceId.match(/^[0-9]+$/)
                && this.SubFormData.currentDeviceId.length <= 12)
                {
                    testValidInput[7].isCorrect = true;
                }else{
                    testValidInput[7].isCorrect = false;
                }//END Current DeviceId TESTING.

                // Other(from Hardware Provision) [INDEX: 8] = alphanumberic(guess).
                //END other(from Hardware Provison) TESTING.

                //Dropdown menus and checks for field existance(logic).

                //DESKTOP
                //[INDEX: 12] 
                if(this.SubFormData.desktopBox)
                {
                    if(this.SubFormData.desktopInput.length > 1)
                    {
                        testValidInput[12].isCorrect = true;
                    }else{
                        testValidInput[12].isCorrect = false;
                    }//end inner if to verify a Desktop option was chosen.
                }else{
                    testValidInput[12].isCorrect = true;//Option with no Desktop at all.
                }//END verify Desktop and it's fields.

                //LAPTOP
                //[INDEX: 13]
                if(this.SubFormData.laptopBox)
                {
                    if(this.SubFormData.laptopInput.length > 1)
                    {
                        testValidInput[13].isCorrect = true;
                    }else{
                        testValidInput[13].isCorrect = false;
                    }//end verify for laptop input
                }else{
                    testValidInput[13].isCorrect = true;//Option where Laptop was never chosen.
                }//END verify for Laptop 

                //MONITOR
                //[INDEX: 14]
                if(this.SubFormData.monitorBox)
                {
                    if(this.SubFormData.monitorMode.length > 1)
                    {
                        testValidInput[14].isCorrect = true;
                    }else{
                        testValidInput[14].isCorrect = false;
                    }

                    if(this.SubFormData.monitorInput.length > 1)
                    {
                        testValidInput[15].isCorrect = true;
                    }else{
                        testValidInput[15].isCorrect = false;
                    }
                }else{
                    testValidInput[14].isCorrect = true;//Option where Monitor was never chosen.
                    testValidInput[15].isCorrect = true;
                }//END verify for Monitor checkbox + fields.

                //NOTE: PRINTER IS ONLY A CHECKBOX. Nothing to check. 

                //IP Desk Phone
                //[INDEX: 16]
                if(this.SubFormData.ipDeskPhoneBox)
                {
                    if(this.SubFormData.ipDeskPhoneInput.length > 1)
                    {
                        testValidInput[16].isCorrect = true;
                    }else{
                        testValidInput[16].isCorrect = false;
                    }//end inner if.
                }else{
                    testValidInput[16].isCorrect = true;//Option where IP Desk Phone was never chosen. 
                }//END verify for IP Desk Phone

                //HARDWARE specific Other field.
                //[INDEX: 17]
                if(this.SubFormData.otherBox)
                {
                    if(this.SubFormData.otherInput.match(/^[a-zA-Z0-9\s.,!?]+$/))
                    {
                        testValidInput[17].isCorrect = true;
                    }else{
                        testValidInput[17].isCorrect = false;
                    }
                }else{
                    testValidInput[17].isCorrect = true;//Option where Hardware 'Other' was never chosen at all. 
                }//END verify for Other
            }//END BIG IF : testing for Hardware Provisioning.

            //CODE BLOCK: testing for 'Other' field inbetween hadware and software tables.
            if(this.SubFormData.provSoftware || this.SubFormData.provHardware)
            {   
                //test the single field.
                //alpha numberic. Software OTHER field. INBETWEEN hardware and software tables.
                if(this.SubFormData.softwareOtherBox == true)
                {
                    // Software something other [INDEX: 9]
                    if(this.SubFormData.softwareOtherInput.match(/^[a-zA-Z0-9\s.,!?]+$/)){
                        testValidInput[9].isCorrect = true;
                    }else{
                        testValidInput[9].isCorrect = false;
                    }//end if else    
                }//end test if 'Other' was selected.
            }//END 'Other' field testing.

            //CODE BLOCK: Software Testing
            if(this.SubFormData.provSoftware)
            {
                //Software Cost center / I/O[INDEX: 2] = 15 numeric characters
                //    - check for 15 numbers, so /\d{15}/ for 15 digits 
                //        and no other characters so !(/\D+/).
                if(this.SubFormData.softCostCenterIO.match(/\d{1,15}/)
                  &&  !this.SubFormData.softCostCenterIO.match(/\D+/) 
                  && this.SubFormData.softCostCenterIO.length <= 15){
                    testValidInput[2].isCorrect = true;
                } else {
                    testValidInput[2].isCorrect = false;
                }//END software cost center TESTING:

               //Software Gl Acc[INDEX : 3] = 15 numeric characters. 
                if(this.SubFormData.softGlAcc.match(/\d{1,15}/)
                  && !this.SubFormData.softGlAcc.match(/\D+/) 
                  && this.SubFormData.softGlAcc.length <= 15 )
                {
                    testValidInput[3].isCorrect = true;
                }else{
                    testValidInput[3].isCorrect = false;
                }//END software Gl Acc TESTING:

                //Dynamic table inside of software testing.
                //software table testing.
                //    - this is it's on array with two values per element.
                //    - a Description and a SAP LogOn Id.
                //    - The Descirption is chosen from a dropdown menu, so as long as something is picked.
                //    - SAP LogOnID is alphanumberic with up 6 characters(?)
                if(this.SubFormData.specialSoftware.length >= 1)
                { 
                    for(let s of this.SubFormData.specialSoftware)
                    {
                        if(s.softDesc.length  != null && s.loginID.match(/^[a-zA-Z0-9]+$/)
                        && s.loginID.length <= 6){
                            testValidInput[10].isCorrect = true;
                        }else{
                            testValidInput[10].isCorrect = false;
                        break; //stop array surfing and trigger a mismatched input.
                        }//end inner if-else
                    }//end for loop
                }else{
                    testValidInput[10].isCorrect = true;//if no table, just true.
                }//END software table TESTING. Works if the table is selected. 

            }//END BIG IF for software testing

            //VALIDATION. Loop through testValidInput array and look for errors.
            //If one is found, set fianlCheck to false. 
            for(let e of testValidInput)
            {
                if(e.isCorrect == false){
                    finalCheck = false;
                    console.log(`${e.name}`);
                }
            }//END foor loop for testValidInput array.

        
            if(finalCheck == true)
            { 
                console.log(`CLEARED. All valid inputs.`);
                this.SubFormData.Completed = true;
                console.log(this.SubFormData);
            }//end validation test.

        }//end if subform exists. 

        //if there are input errors(verification), show a table with those values.
    }//end verifySubForm.
	

	constructor() {

    }

    ngOnInit(){
    }




}
