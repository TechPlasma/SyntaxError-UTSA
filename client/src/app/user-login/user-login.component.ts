import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { APIService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

	ERROR = [];

	username:string;
	password:string;

	async login(){

		let result = await this.apiService.signIn(this.username,this.password);

		if(await result[1]){
			this.router.navigate(['/view/']);
		}else{
			this.ERROR.push("INVALID LOGIN");
		}

	}

	constructor(private router:Router,
				private apiService:APIService) {


	}

	ngOnInit() {
	}

}
