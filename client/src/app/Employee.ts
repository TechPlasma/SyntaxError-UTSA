

export class Employee{
	// Constructor Calls
	// 		new Employee()
	// 		new Employee(FirstName)
	// 		new Employee(FirstName,LastName)
	// 		new Employee(FirstName,LastName,DEPT)
	// 		new Employee(FirstName,LastName,DEPT,POSIT)

	constructor(){
		
		this.FIRSTNAME = '';
		this.LASTNAME = '';
		this.DEPT = '';
		this.POSIT = '';

		this.SAP = '';
		this.PWD = '';
		this.MI = '';
		this.EMAIL = '';
		this.FORMS = [];
	}

	DEPT:string;
	POSIT:string;
	SAP:string;
	PWD:string;

	FIRSTNAME:string;
	LASTNAME:string;
	MI:string;
	EMAIL:string;
	FORMS:string[];

}