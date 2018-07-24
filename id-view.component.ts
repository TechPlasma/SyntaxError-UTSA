import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-id-view',
  templateUrl: './id-view.component.html',
  styleUrls: ['./id-view.component.css']
})
export class IDViewComponent implements OnInit {
	@Input()
	SubFormData:any = null;


	constructor() {

	}

	ngOnInit() {
	}

}
