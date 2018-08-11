import { Component, OnInit,Input } from '@angular/core';

@Component({
	selector: 'app-view-status',
	templateUrl: './view-status.component.html',
	styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {

	@Input()
	FormData:any = null;

	@Input()
	mode:string = "DEPT";


	getSubFormArray(formdata){
		let tempArr = [];

		if(formdata != null){
			for(let subForm in formdata){
				if(/SubForm\d/.test(subForm)){
					tempArr.push(formdata[subForm]);
				}
			}
			return tempArr;
		}else{
			return tempArr;
		}
		
	}

	constructor() {

	}

	ngOnInit() {
	}

}
