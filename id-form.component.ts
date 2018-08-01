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
        if(this.SubFormData.idCard == false
          && this.SubFormData.facilityAccess == false
            && this.SubFormData.cjis == false
              && this.SubFormData.addrChange == false
                && this.SubFormData.reIssueCard == false
                  || this.SubFormData.jobStatus == ' '
                    || (!this.SubFormData.workPhone.match(/^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/))
                      || (!this.SubFormData.contactPhone.match(/^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/))) {
                  alert('Please specify Request Type, Job Status, work phone, and contact phone');
                  this.SubFormData.Completed = false;
                  console.log(this.SubFormData);
              }


      else{
        this.SubFormData.Completed = true;
        console.log(this.SubFormData);
      }
      if(this.SubFormData.jobStatus == 'contractor'
         || this.SubFormData.jobStatus == 'vendor'
           || this.SubFormData.jobStatus == 'tempcontract')
            if(!this.SubFormData.companyName.match(/[a-zA-Z\s ]{1,30}/)
            ||!this.SubFormData.pocName.match(/[a-zA-Z\s ]{1,30}/)
              ||!this.SubFormData.contactNum.match(/^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/)
                ||!this.SubFormData.contractNum.match(/^[0-9]+$/))
            {
              alert('Please specify Contractor/Vendor info');
              this.SubFormData.Completed = false;
              console.log(this.SubFormData);
            }
    else{
      this.SubFormData.Completed = true;
      console.log(this.SubFormData);
    }

    if(this.SubFormData.facilityAccess == true
           || this.SubFormData.cjis == true
             || this.SubFormData.addrChange == true)
            if(!this.SubFormData.facilityName.match(/[a-zA-Z\s ]{1,30}/)
              ||!this.SubFormData.facilityAddr.match(/^[0-9]+\s[a-zA-Z\s,]+[0-9]+/)
               || !this.SubFormData.facilityEntry.match(/[a-zA-Z0-9\s ]{1,8}/)
                 || !this.SubFormData.suiteEntry.match(/[a-zA-Z0-9\s]{1,8}/)
                  || !this.SubFormData.roomEntry.match(/^[a-zA-Z0-9\s ]{1,8}/)
                    || !this.SubFormData.other.match(/^[a-zA-Z0-9\s ]{1,8}/))
                    {
                      alert('Please enter a Valid Facility Name, Address, facilityEntry, suite Entry, Room Entry or Other');
                      this.SubFormData.Completed = false;
                      console.log(this.SubFormData);
                    }
                  else{
                    this.SubFormData.Completed = true;
                    console.log(this.SubFormData); 
                  }



  constructor(){

  }
ngOnInit(){

}
}
