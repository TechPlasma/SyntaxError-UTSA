import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import {Section2Choices,Section3Choices,Section4Choices} from './SapFormChoices';

const noop = () => {
};

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

    verifySubForm(){
        this.SubFormData.Completed = true;
        console.log(this.SubFormData);
    }


	constructor() {
		this.section2Choices = Section2Choices;
		this.section3Choices = Section3Choices;
		this.section4Choices = Section4Choices;
	}

	ngOnInit() {
	}

}
