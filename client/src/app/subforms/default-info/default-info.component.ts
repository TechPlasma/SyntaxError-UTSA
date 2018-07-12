import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-default-info',
  templateUrl: './default-info.component.html',
  styleUrls: ['./default-info.component.css']
})
export class DefaultInfoComponent implements OnInit {

	@Input() userName:string;
	@Output() updated: EventEmitter<string> = new EventEmitter<string>();

	changeValue(){
		this.userName = this.userName;
	}

	constructor() { }

	ngOnInit() {
	}

}
