import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hard-soft-view',
  templateUrl: './hard-soft-view.component.html',
  styleUrls: ['./hard-soft-view.component.css']
})
export class HardSoftViewComponent implements OnInit {
	@Input()
	SubFormData:any = null;


	constructor() {

	}

	ngOnInit() {
	}

}
