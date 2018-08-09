import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};
 
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FuelFormComponent),
    multi: true
};

@Component({
	selector: 'app-fuel-form',
	templateUrl: './fuel-form.component.html',
	styleUrls: ['./fuel-form.component.css'],
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class FuelFormComponent implements OnInit {

    ERROR;

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
        this.ERROR = [];
    	if( this.SubFormData.reviewedAD1 == true
    	 && this.SubFormData.trainingCourse == true
    	 /* && this.SubFormData.costCenter.match(/[A-Za-z]{1,20} ?[A-za-z]{1,20}/)*/)
    	{
        this.SubFormData.Completed = true;
        console.log(this.SubFormData);
      }else{
          this.ERROR.push("Please Complete the Form");
      }
    }

	

	constructor() {

    }

    ngOnInit(){

    }


}
