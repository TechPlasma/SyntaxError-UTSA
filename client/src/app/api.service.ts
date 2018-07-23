import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

	postForm(form){
		let postData = {
			SampleString:"testing string",
			"SubForm0": {
				"FormName": "CoSA ID Form",
				"Completed": "true",
				"Fufillment": "",
				"requestingDepartment": "",
				"division": "None",
				"departmentRequester": "",
				"phoneExt": "",
				"date": "",
				"firstName": "Saul",
				"lastName": "Torres",
				"suffix": "",
				"phoneNumber": "",
				"jobTitle": "Whatever Job",
				"sap": "",
				"middleInitial": "A",
				"Needed": true
			}
		}


		console.log(JSON.stringify(postData));
		let baseURL = 'http://localhost:3000/api'
		let api = `/MasterForms`

		let url = `${baseURL}${api}`;
		let settings = {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(form)
		}

		fetch(url,settings)
		.then(res =>{
			res.json().then(thisData=>{console.log(thisData)});
		})
		.catch(err =>{
			console.error(err);
		})
		
		// var xhr = new XMLHttpRequest();
		// xhr.open("POST", url, true);
		// xhr.setRequestHeader('Content-Type', 'application/json');
		// xhr.send(JSON.stringify(postData));
		// xhr.onload = function() {
		// console.log("HELLO")
		// console.log(this.responseText);
		// var data = JSON.parse(this.responseText);
		// console.log(data);
		// }

	}

	getForms(){
		let baseURL = 'http://localhost:3000/api'
		let api = `/MasterForms`

		let url = `${baseURL}${api}`;
		let settings = {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		}

		fetch(url,settings)
		.then(res =>{
			console.log(res);
			res.json().then(thisData=>{console.log(thisData)});
		})
		.catch(err =>{
			console.error(err);
		})

	}


	constructor() { }
}
