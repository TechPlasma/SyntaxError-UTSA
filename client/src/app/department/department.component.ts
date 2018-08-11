import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MasterForm } from '../MasterForm';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

	DID;
	isFulfilmentDepartment:false;

	tempMasterForm;


	

	constructor(
		private route: ActivatedRoute,
		private location: Location
	) {
		this.DID = +this.route.snapshot.paramMap.get('DID');

		this.tempMasterForm = new MasterForm();
	}

	ngOnInit() {
	}

}
