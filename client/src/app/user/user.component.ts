import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	UID;

	constructor(
		private route: ActivatedRoute,
		private location: Location
	) {
		this.UID = +this.route.snapshot.paramMap.get('UID');
	}

	ngOnInit() {
	}

}
