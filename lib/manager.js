const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email,officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        var role = 'Manager';
        return role
        };
    
}

module.exports = Manager;
const newManager = new Manager('John','123','email','33d')
console.log(newManager)