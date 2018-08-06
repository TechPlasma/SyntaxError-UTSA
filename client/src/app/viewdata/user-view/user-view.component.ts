import { Component, OnInit, Input } from '@angular/core';			

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
	@Input()
	SubFormData:any = null;


	constructor() {

	}

	ngOnInit() {
	}

}
