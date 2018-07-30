import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { hardSoftForm, SpecialSoftware  } from './hard-softModel'

const noop = () => {
};

        //array for validation. 
        //change to default to true, testing handles any switching. 
 let testValid: { isCorrect: boolean, name: string }[] = 
     [
    { "isCorrect": true, "name": "hardCostCenterIO" },     //[0]
    { "isCorrect": true, "name": "hardGlAcc" },            //[1]
    { "isCorrect": true, "name": "softCostCenterIO" },     //[2]
    { "isCorrect": true, "name": "softGlAcc" },            //[3]
    { "isCorrect": true, "name": "BldgLoc" },              //[4]
    { "isCorrect": true, "name": "Floor" },                //[5]
    { "isCorrect": true, "name": "office" },               //[6]
    { "isCorrect": true, "name": "currentDeviceId" },      //[7]
    { "isCorrect": true, "name": "otherInput" },           //[8]
    { "isCorrect": true, "name": "softwareOtherInput" },   //[9]
    { "isCorrect": true, "name": "SpecialSoftwareTable" },   //[10]
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
            /*
            TWO big if statements for Hardware and Software reactive fields.
                Various testing(regex) for those reactive fields.
            These test edit our testValid array and set isCorrect boolean to true or false
            as needed. 
            Final lines of function code check entire array, if any error is found, it sets a 
            completion boolean(finalCheck) to false and prints invalid input.
                - else it is set to true and verfies the form. 
            */
            if(this.SubFormData.provHardware)
            {
                //Hardware Cost center / I/O[INDEX: 0] = 15 numeric characters
                //    - check for 15 numbers, so /\d{15}/ for 15 digits 
                //        and no other characters so !(/\D+/).
                if(this.SubFormData.hardCostCenterIO.match(/\d{1,15}/)
                &&  !this.SubFormData.hardCostCenterIO.match(/\D+/) ){
                     //Index value  is known, see above, so just reference it. :)
                    testValid[0].isCorrect = true;                  
                    }else{
                        testValid[0].isCorrect = false;
                    }
                    //end hardware cost center TESTING:

                //Hardware GlAcc[INDEX: 1] = 15 numberic characters
                //    - check for 15 numbers, so /\d{15}/ for 15 digits 
                //        and no other characters so !(/\D+/).
                if(this.SubFormData.hardGlAcc.match(/\d{1,15}/)
                   &&  !this.SubFormData.hardGlAcc.match(/\D+/) ){
                            testValid[1].isCorrect = true;
                    }else{ 
                        testValid[1].isCorrect = false; 
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
                        testValid[4].isCorrect = true;
                    }else{ 
                        testValid[4].isCorrect = false;
                    }//END Blgd TESTING. 


                //Floor [INDEX: 5] = floor input has 1 or two numbers, and not letters.
                // floor should a string of length 2 or less.
                // 1 or 2 digits.
                // use of ! functionality. So ONLY digits via using not((/\D+/).
                if(this.SubFormData.floor.match(/\d{1,2}/) && !this.SubFormData.floor.match(/\D+/)
                            && this.SubFormData.floor.length <= 2 ){
                            testValid[5].isCorrect = true;              
                    }else{
                        testValid[5].isCorrect = false; 
                    }
                    //END Floor validation. 

               // office[INDEX: 6]= 10 alpha/numeric characters.
                // Use alpha numberic (SEE Bldg Location testing regex.) 
                // but Modified to only allow periods as an extra.
                if(this.SubFormData.office.match(/^[a-zA-Z0-9\s.]+$/)
                 && this.SubFormData.office.length <= 10)
                {
                    testValid[6].isCorrect = true;
                }else{
                    testValid[6].isCorrect = false;
                }//END office validation TESTING.

                // Current Device('Asset' Tag)[INDEX: 7] = 12 numeric characters
                if(this.SubFormData.currentDeviceId.match(/^[0-9]+$/)
                && this.SubFormData.currentDeviceId.length <= 12)
                {
                    testValid[7].isCorrect = true;
                }else{
                    testValid[7].isCorrect = false;
                }//END Current DeviceId TESTING.

                // Other(from Hardware Provision) [INDEX: 8] = alphanumberic(guess).
                if(this.SubFormData.otherBox){
                    if(this.SubFormData.otherInput.match(/^[a-zA-Z0-9\s.,!?]+$/) )
                    {
                        testValid[8].isCorrect = true;
                    }else{
                        testValid[8].isCorrect = false;
                    }
                }//END other(from Hardware Provison) TESTING

            }//END BIG IF : testing for Hardware Provisioning.

            //CODE BLOCK: testing for 'Other' field inbetween hadware and software tables.
            if(this.SubFormData.provSoftware || this.SubFormData.provHardware)
            {   
                //test the single field.
                //alpha numberic. Software OTHER field. INBETWEEN hardware and software tables.
                if(this.SubFormData.softwareOtherBox){
                    // Software something other [INDEX: 9]
                    if(this.SubFormData.softwareOtherInput.match(/^[a-zA-Z0-9\s.,!?]+$/)){
                        testValid[9].isCorrect = true;
                    }else{
                        testValid[9].isCorrect = false;
                    }//end if else    
                }//end test if 'Other' was selected.
            }//END 'Other' field testing.

            //CODE BLOCK: Software Testing
            if(this.SubFormData.provSoftware)
            {
                //Software Cost center / I/O[INDEX: 2] = 15 numeric characters
                //    - check for 15 numbers, so /\d{15}/ for 15 digits 
                //        and no other characters so !(/\D+/).
                if(this.SubFormData.softCostCenterIO.match(/\d{15}/)
                  &&  !this.SubFormData.softCostCenterIO.match(/\D+/) ){
                    testValid[2].isCorrect = true;
                } else {
                    testValid[2].isCorrect = false;
                }//END software cost center TESTING:

               //Software Gl Acc[INDEX : 3] = 15 numeric characters. 
                if(this.SubFormData.softGlAcc.match(/\d{15}/)
                  &&  !this.SubFormData.softGlAcc.match(/\D+/) ){
                    testValid[3].isCorrect = true;
                }else{
                    testValid[3].isCorrect = false;
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
                        if(s.softDesc != null && s.loginID.match(/^[a-zA-Z0-9]+$/)
                        && s.loginID.length <= 6){
                            testValid[10].isCorrect = true;
                        }else{
                            testValid[10].isCorrect = false;
                        break; //stop array surfing and trigger a mismatched input.
                        }//end inner if-else
                    }//end for loop
                }//END software table TESTING. Works if the table is selected. 

            }//END BIG IF for software testing

            console.log(`Jesse, can you see this shit?`);

            //VALIDATION. Loop through testValid array and look for errors.
            //If one is found, set fianlCheck to false. 
            for(let e of testValid)
            {
                if(e.isCorrect == false){
                    finalCheck = false;
                    console.log(`TESTING changes. ${e.name} is ${e.isCorrect}`);
                }
            }//END foor loop for testValid array.

        
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
