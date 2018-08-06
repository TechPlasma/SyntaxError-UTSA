

export class Employee{
	// Constructor Calls
	// 		new Employee()
	// 		new Employee(FirstName)
	// 		new Employee(FirstName,LastName)
	// 		new Employee(FirstName,LastName,DEPT)
	// 		new Employee(FirstName,LastName,DEPT,POSIT)

	constructor(private FIRSTNAME?:string,private LASTNAME?:string,private DEPT?:string,private POSIT?:string){
		if(FIRSTNAME == undefined)
			this.FIRSTNAME = '';
		if(LASTNAME == undefined)
			this.LASTNAME = '';
		if(DEPT == undefined)
			this.DEPT = '';
		if(POSIT == undefined)
			this.POSIT = '';

		this.SAP = '';
		this.PWD = '';
		this.MI = '';
		this.EMAIL = '';
		this.FORMS = [];
	}

	//DEPT:string;
	//POSIT:string;
	SAP:string;
	PWD:string;

	// FIRSTNAME:string;
	// LASTNAME:string;
	MI:string;
	EMAIL:string;
	FORMS:string[];

}