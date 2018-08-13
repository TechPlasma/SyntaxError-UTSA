import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

import { MasterForm } 	from './MasterForm';
import { Employee } 	from './Employee';
import { Department } 	from './Department';
import { deptLookup } 	from './Departments';

@Injectable({
  providedIn: 'root'
})
export class APIService {

	EMPLOYEE = new BehaviorSubject<Employee>(null);
	DEPARTMENT = new BehaviorSubject<Department>(null);
	MASTERFORM = new BehaviorSubject(null);

	EMPOLYEEFORMS = new BehaviorSubject<any[]>([]);
	DEPARTMENTINFORMS = new BehaviorSubject<any[]>([]);
	DEPARTMENTOUTFORMS = new BehaviorSubject<any[]>([]);

	getOBSEmployee():Observable<any>{
		return this.EMPLOYEE.asObservable();
	}
	getOBSDepartment():Observable<any>{
		return this.DEPARTMENT.asObservable();
	}
	getOBSMasterForm():Observable<any>{
		return this.MASTERFORM.asObservable();
	}

	getOBSEmpForms():Observable<any[]>{
		return this.EMPOLYEEFORMS.asObservable();
	}
	getOBSDeptInForms():Observable<any[]>{
		return this.DEPARTMENTINFORMS.asObservable();
	}
	getOBSDeptOutForms():Observable<any[]>{
		return this.DEPARTMENTOUTFORMS.asObservable();
	}

	//	Checks Password vs Usename of Database
	//	Horribly insecure but not my problem
	//	Gets Department and User Profiles
	//	also 
	signIn(SAP,password){
		let baseURL = 'http://35.185.64.38:3000/api'
		let api = `/Employees`
		let filter = `?filter=%7B%22where%22%3A%7B%22and%22%3A%5B%7B%22SAP%22%3A%22${SAP}%22%7D%2C%7B%22PWD%22%3A%22${password}%22%7D%5D%7D%7D`;

		let url = `${baseURL}${api}${filter}`;
		let settings = {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		}
		return new Promise( resolve => {
			fetch(url,settings)
			.then(res =>{
				console.log(res);
				res.json().then(thisData=>{
					if(thisData.length == 1){
						console.log(thisData);
						this.EMPLOYEE.next(thisData[0]);
						console.log("Successfull Login");
						resolve([thisData,true]);
					}else{
						console.log(thisData);
						console.log("Failed Login");
						resolve([thisData,false]);
					}
				});
			})
			.catch(err =>{
				console.error(err);
			})
		});
	}

	getDepartmentID(departmentID){

	}

	getDepartmentCODE(DEPTCODE,LOGIN){
		let baseURL = 'http://35.185.64.38:3000/api'
		let api = `/Departments`
		let filter = `?filter=%7B%22where%22%3A%7B%22DEPTCODE%22%3A%22${DEPTCODE}%22%7D%7D`;

		let url = `${baseURL}${api}${filter}`;
		let settings = {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		}
		return new Promise( resolve => {
			fetch(url,settings)
			.then(res =>{
				console.log(res);
				res.json().then(thisData=>{
					if(thisData.length == 1){
						console.log(thisData);
						if(LOGIN){
							this.DEPARTMENT.next(thisData[0]);
						}
						resolve([thisData,true]);
					}else{
						console.log(thisData);
						resolve([thisData,false]);
					}
				});
			})
			.catch(err =>{
				console.error(err);
			})
		});
	}

	getMasterForm(formID){

	}


	postForm(form){
		let baseURL = 'http://35.185.64.38:3000/api'
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
	}

	deleteForm(formID){
		console.log(`Deleteing Form '${formID}'`);
		let baseURL = 'http://35.185.64.38:3000/api'
		let api = `/MasterForms`
		let id = `/${formID}`

		let url = `${baseURL}${api}${id}`;
		let settings = {
			method: 'delete'//,
			// headers:{
			// 	'Content-Type': 'application/json'
			// }
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

	getForms(){
		let baseURL = 'http://35.185.64.38:3000/api'
		let api = `/MasterForms`

		let url = `${baseURL}${api}`;
		let settings = {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		}
		return new Promise( resolve => {
			fetch(url,settings)
			.then(res =>{
				console.log(res);
				res.json().then(thisData=>{
					console.log(thisData);
					resolve(thisData);
				});
			})
			.catch(err =>{
				console.error(err);
			})
		});
	}

	postEmployee(emp){
		let baseURL = 'http://35.185.64.38:3000/api'
		let api = `/Employees`

		let url = `${baseURL}${api}`;
		let settings = {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(emp)
		}

		fetch(url,settings)
		.then(res =>{
			res.json().then(thisData=>{console.log(thisData)});
		})
		.catch(err =>{
			console.error(err);
		})
	}

	getEmployees(){
		let baseURL = 'http://35.185.64.38:3000/api'
		let api = `/Employees`

		let url = `${baseURL}${api}`;
		let settings = {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		}
		return new Promise( resolve => {
			fetch(url,settings)
			.then(res =>{
				console.log(res);
				res.json().then(thisData=>{
					console.log(thisData);
					resolve(thisData);
				});
			})
			.catch(err =>{
				console.error(err);
			})
		});
	}

	deleteEmployee(SAP){
		console.log(`Deleteing Form '${SAP}'`);
		let baseURL = 'http://35.185.64.38:3000/api'
		let api = `/Employees`
		let id = `/${SAP}`

		let url = `${baseURL}${api}${id}`;
		let settings = {
			method: 'delete'//,
			// headers:{
			// 	'Content-Type': 'application/json'
			// }
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

	postDepartment(DEPT){
		let baseURL = 'http://35.185.64.38:3000/api'
		let api = `/Departments`

		let url = `${baseURL}${api}`;
		let settings = {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(DEPT)
		}

		fetch(url,settings)
		.then(res =>{
			res.json().then(thisData=>{console.log(thisData)});
		})
		.catch(err =>{
			console.error(err);
		})
	}

	getDepartments(){
		let baseURL = 'http://35.185.64.38:3000/api'
		let api = `/Departments`

		let url = `${baseURL}${api}`;
		let settings = {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		}
		return new Promise( resolve => {
			fetch(url,settings)
			.then(res =>{
				console.log(res);
				res.json().then(thisData=>{
					console.log(thisData);
					resolve(thisData);
				});
			})
			.catch(err =>{
				console.error(err);
			})
		});
	}

	deleteDepartment(DID){
		console.log(`Deleteing Form '${DID}'`);
		let baseURL = 'http://35.185.64.38:3000/api'
		let api = `/Departments`
		let id = `/${DID}`

		let url = `${baseURL}${api}${id}`;
		let settings = {
			method: 'delete'//,
			// headers:{
			// 	'Content-Type': 'application/json'
			// }
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

	pollingFunction(){
		console.log("Polling");
		if(this.EMPLOYEE.value != null){
			console.log(this.EMPLOYEE.value);
			this.getDepartmentCODE(this.EMPLOYEE.value.DEPT,true);
		}
	}


	constructor() {
		setInterval(()=>{
			this.pollingFunction();
		},10000);

	}
}
