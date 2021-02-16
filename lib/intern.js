const Employee = require("./employee")

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school= school;
    }
    getSchool(){
        return this.school
    }
    getRole(){
        var role = 'Intern';
        return role
        };
    
}
module.exports = Intern;


const newIntern = new Intern('John','123','email','GVSU')
//console.log(newIntern)