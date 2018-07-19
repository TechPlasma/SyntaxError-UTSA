import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fuel-view',
  templateUrl: './fuel-view.component.html',
  styleUrls: ['./fuel-view.component.css']
})
export class FuelViewComponent implements OnInit {
	@Input()
	SubFormData:any = null;

	constructor() {

	}

	ngOnInit() {
	}

}
