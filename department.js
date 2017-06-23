var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Abstract class creation
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name : " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("Accounting meeting is held at 10 A.M every morning"); /*abstract method implemented in the sub class*/
    };
    return AccountingDepartment;
}(Department));
var ComputerDepartment = (function (_super) {
    __extends(ComputerDepartment, _super);
    function ComputerDepartment() {
        return _super.call(this, "Computer Section") || this;
    }
    ComputerDepartment.prototype.printMeeting = function () {
        console.log("Computer section meeting is held at 11 A.M every morning"); /*abstract method implemented in the sub class*/
    };
    return ComputerDepartment;
}(Department));
var account = new AccountingDepartment(); /*object of Account dept*/
account.printName();
account.printMeeting();
var computer = new ComputerDepartment(); /*object of Computer dept*/
computer.printName();
computer.printMeeting();
