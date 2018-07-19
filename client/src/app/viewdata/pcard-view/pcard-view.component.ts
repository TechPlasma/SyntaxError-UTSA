import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-pcard-view',
  templateUrl: './pcard-view.component.html',
  styleUrls: ['./pcard-view.component.css']
})
export class PCardViewComponent implements OnInit {
	@Input()
	SubFormData:any = null;


	constructor() {

	}

	ngOnInit() {
	}

}
