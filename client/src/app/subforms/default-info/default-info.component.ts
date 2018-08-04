import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { departments } from '../../Departments';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DefaultInfoComponent),
    multi: true
};

@Component({
  selector: 'app-default-info',
  templateUrl: './default-info.component.html',
  styleUrls: ['./default-info.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DefaultInfoComponent implements ControlValueAccessor {

    departments = departments;

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
    var verified = true;
    var i = 0;
    
    //array of information fields
    var arr_info = [ 
    	this.SubFormData.requestingDepartment,
		this.SubFormData.division,
		this.SubFormData.departmentRequester,
		this.SubFormData.phoneExt,
		this.SubFormData.firstName,
		this.SubFormData.middleInitial,
		this.SubFormData.lastName,
		this.SubFormData.suffix,
		this.SubFormData.phoneNumber,
		this.SubFormData.jobTitle,
		this.SubFormData.sap];	
		 
	//array of regular expressions
		var arr_check = [/^[a-zA-Z]{1,30}$/, /^[a-zA-Z]{1,30}$/, /^[a-zA-Z]{1,30}$/,
		/^[0-9]{1,10}$/, /^[a-zA-Z]{1,30}$/, /^[a-zA-Z]{0,1}$/,
		/^[a-zA-Z]{1,30}$/, /^[a-zA-Z]{1,10}$/, /^\(?[0-9]{3}\)?[0-9]{3}-?[0-9]{4}$/,
		/^[a-zA-Z]{1,30}$/, /^[0-9]{6}$/];
	
		//Info Check
		while(i < arr_info.length{
		console.log("while loop");
			if(!arr_check[i].test(arr_info[i])){
			console.log(arr_info[i] "is incorrect!");
			verified = false;
			}//end if
			i++;
    	}//end while
    	
    	//Date Check
    	if(!(this.SubFormData.date instanceof Date)){
		console.log("Date format incorrect!");
   		 verified = false;
		}//end if
		
		console.log(this.SubFormData);
		if(verified){
        this.SubFormData.Completed = true;
		}//end if
	}//end method

	constructor() {

    }

    ngOnInit(){

    }


}
