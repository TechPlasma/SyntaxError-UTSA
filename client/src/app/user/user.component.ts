import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { APIService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	subscription:Subscription;

	UID;

	employee;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private apiService: APIService
	) {
		this.UID = +this.route.snapshot.paramMap.get('UID');

		this.subscription = apiService.getOBSEmployee().subscribe((value) => {
			this.employee = value;
			//console.log(value);
		});
	}

	ngOnInit() {
	}

}
