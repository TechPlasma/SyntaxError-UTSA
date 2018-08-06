


export class Department{
	constructor(){
		this.isFulfillment = false;
		this.dID = '';
		this.outMasterForms = [];
		this.inMasterForms = [];

		this.DEPTNAME = '';
		this.DEPTCODE = '';

	}

	DEPTNAME:string;
	DEPTCODE:string;
	
	isFulfillment:boolean;
	dID:string;
	outMasterForms:string[];
	inMasterForms:string[];

}