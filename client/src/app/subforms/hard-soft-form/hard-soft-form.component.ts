import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { hardSoftForm, SpecialSoftware  } from './hard-softModel'

const noop = () => {
};
 
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

    verifySubForm(){
        this.SubFormData.Completed = true;
        console.log(this.SubFormData);
    }

	

	constructor() {

    }

    ngOnInit(){

    }




}
