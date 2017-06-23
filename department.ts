//Abstract class creation
abstract class Department {
	constructor(public name:string){

	}

	printName():void {
		console.log("Department name : " + this.name);
	}

	abstract printMeeting():void;	//abstract method which has to be implemented in the sub class
}

class AccountingDepartment extends Department{
	
	constructor() {
		super("Accounting"); /*passing the parameter to the superclass constructor using super() method*/
	}

	printMeeting(){
		console.log(`Accounting meeting is held at 10 A.M every morning`);	/*abstract method implemented in the sub class*/
	}
}

class ComputerDepartment extends Department {
	constructor() {
		super("Computer Section"); 
	}

	printMeeting(){
		console.log(`Computer section meeting is held at 11 A.M every morning`);	/*abstract method implemented in the sub class*/
	}
}


let account = new AccountingDepartment();	/*object of Account dept*/
	account.printName();
	account.printMeeting();

let computer = new ComputerDepartment();	/*object of Computer dept*/
	computer.printName();
	computer.printMeeting();