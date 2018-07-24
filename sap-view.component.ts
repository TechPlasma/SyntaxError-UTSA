import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sap-view',
  templateUrl: './sap-view.component.html',
  styleUrls: ['./sap-view.component.css']
})
export class SAPViewComponent implements OnInit {
	@Input()
	SubFormData:any = null;


	constructor() {

	}

	ngOnInit() {
	}

}
