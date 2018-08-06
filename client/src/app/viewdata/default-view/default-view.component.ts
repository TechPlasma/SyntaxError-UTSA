import { Component, OnInit, Input } from '@angular/core';

import { deptLookup } from '../../Departments';

@Component({
  selector: 'app-default-view',
  templateUrl: './default-view.component.html',
  styleUrls: ['./default-view.component.css']
})
export class DefaultViewComponent implements OnInit {
	@Input()
	SubFormData:any = null;

	deptLookup = deptLookup;


	constructor() {

	}

	ngOnInit() {
	}

}
