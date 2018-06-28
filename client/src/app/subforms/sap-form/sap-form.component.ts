import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sap-form',
  templateUrl: './sap-form.component.html',
  styleUrls: ['./sap-form.component.css']
})
export class SAPFormComponent implements OnInit {

	testObject={
		section1:{
			value:"",
			items: [
				{
					name:"Add New User",
					value:"Add New User"
				},
				{
					name:"Modify Existing User (Add Roles)",
					value:"Modify Existing User (Add Roles)"
				},

				{
					name:"Delimt Roles",
					value:"Delimt Roles"
				},
				{
					name:"Deactivate Uer",
					value:"Deactivate Uer"
				},
				{
					name:"New Field",
					value:"Deactivate"
				}
			]
		}
	}

	alert(value){
		console.log(value);
	}

  constructor() { }

  ngOnInit() {
  }

}
