import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

	username:string;
	password:string;

	login(){
		this.router.navigate(['/view/']);
	}

	constructor(private router:Router) {

	}

	ngOnInit() {
	}

}
