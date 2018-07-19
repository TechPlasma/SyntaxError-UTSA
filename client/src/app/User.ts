

export class User{
	// Constructor Calls
	// 		new User()
	// 		new User(FirstName)
	// 		new User(FirstName,LastName)
	// 		new User(FirstName,LastName,DEPT)
	// 		new User(FirstName,LastName,DEPT,POSIT)

	constructor(private FIRSTNAME?:string,private LASTNAME?:string,private DEPT?:string,private POSIT?:string){
		if(FIRSTNAME == undefined)
			this.FIRSTNAME = '';
		if(LASTNAME == undefined)
			this.LASTNAME = '';
		if(DEPT == undefined)
			this.DEPT = '';
		if(POSIT == undefined)
			this.POSIT = '';

		this.UID = '';
		this.PWD = '';
		this.MI = '';
		this.EMAIL = '';
		this.FORMS = [];
	}

	//DEPT:string;
	//POSIT:string;
	UID:string;
	PWD:string;

	// FIRSTNAME:string;
	// LASTNAME:string;
	MI:string;
	EMAIL:string;
	FORMS:string[];

}