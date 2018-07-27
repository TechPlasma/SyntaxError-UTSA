import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IDFormComponent),
    multi: true
};

@Component({
	selector: 'app-id-form',
	templateUrl: './id-form.component.html',
	styleUrls: ['./id-form.component.css'],
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class IDFormComponent implements OnInit {

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

    verifySubForm(){
      if(this.SubFormData.idCard == false && this.SubFormData.facilityAccess == false && this.SubFormData.cjis == false && this.SubFormData.addrChange == false && this.SubFormData.reIssueCard == false){
        alert('Please Select a request Type');

      }
       if(this.SubFormData.jobStatus == ''){
        alert('Please select Job Status');
      }
       if(this.SubFormData.workPhone == null || !this.SubFormData.workPhone.match(/^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/)){
        alert('Please enter a Valid Work Phone Number');

      }
       if(this.SubFormData.contactPhone == null ||!this.SubFormData.contactPhone.match(/^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/)){
        alert('Please enter a valid Contact Phone Number');
      }
       if(this.SubFormData.companyName == null ||!this.SubFormData.companyName.match(/^[a-zA-Z ]+$/) || !this.SubFormData.companyName.match(/^[a-zA-Z \.]+$/)){
        alert('Please enter a valid Company Name');
      }
       if(this.SubFormData.pocName == null ||!this.SubFormData.pocName.match(/^[a-zA-Z ]+$/)){
        alert('Please enter a valid Point of Contact Name');
      }
       if(this.SubFormData.contractNum == null ||!this.SubFormData.contractNum.match(/^[0-9]+$/) ||!this.SubFormData.contractNum.match(/^[a-zA-Z0-9/-]+$/)){
        alert('Please enter a valid Contract Number');
      }
       if(this.SubFormData.contractExp == null ||!this.SubFormData.contractExp.match(/^[0-9]+\/[0-9]+\/[0-9]{4}$/)){
        alert('Please enter a valid Contract Expiration Date');
      }

       if(this.SubFormData.contactNum == null ||!this.SubFormData.contactNum.match(/^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/) || !this.SubFormData.contactNum.match(/^\([0-9]{3}\)-[0-9]{3}-[0-9]{4}$/)){
        alert('Please enter a valid Contact Number');
      }




       if( this.SubFormData.facilityName == null || !this.SubFormData.facilityName.match(/^[a-zA-Z ]+$/) || !this.SubFormData.facilityName.match(/^[a-zA-Z \.]+$/)){
        alert('Please enter a valid Facility Name');
      }
       if(this.SubFormData.facilityEntry == null ||!this.SubFormData.facilityEntry.match(/^[a-zA-Z0-9 ]+$/) || !this.SubFormData.facilityEntry.match(/^[a-zA-Z \.]+$/)){
        alert('Please enter a valid Facility Entry');
      }
       if(this.SubFormData.suiteEntry == null ||!this.SubFormData.suiteEntry.match(/^[a-zA-Z0-9 ]+$/) || !this.SubFormData.suiteEntry.match(/^[a-zA-Z \.]+$/)){
        alert('Please enter a valid Suite Entry');
      }
       if(this.SubFormData.roomEntry == null ||!this.SubFormData.roomEntry.match(/^[a-zA-Z0-9 ]+$/) || !this.SubFormData.roomEntry.match(/^[a-zA-Z \.]+$/)){
        alert('Please enter a valid Room Entry');
      }
       if(!this.SubFormData.Other.match(/^[a-zA-Z0-9 ]+$/) || !this.SubFormData.Other.match(/^[a-zA-Z0-9 \.]+$/)){
        alert('Please enter another Entry');
      }
       if(this.SubFormData.facilityAddr == null ||!this.SubFormData.facilityAddr.match(/^[0-9]+\s[a-zA-Z\s,]+[0-9]+/)){
        alert('Please enter a valid Facility Address');
      }

        this.SubFormData.Completed = true;
        console.log(this.SubFormData);
      }





	constructor() {

    }

    ngOnInit(){

    }
}
