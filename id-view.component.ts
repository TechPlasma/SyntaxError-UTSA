import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-id-view',
  templateUrl: './id-view.component.html',
  styleUrls: ['./id-view.component.css']
})
export class IDViewComponent implements OnInit {
	@Input()
	SubFormData:any = null;
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

	ngOnInit() {
	}

}
