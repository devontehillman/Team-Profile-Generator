const inquirer = require('inquirer')
//const fs = require('')

class Employee {
    constructor(name, id, email){
    this.name = name; 
    this.id = id; 
    this.email = email;
    // this.role = role;
    }

    getName(){
    return this.name
    };
    getId(){
    return this.id
    };
    getEmail(){
    return this.email    
    };
    getRole(){
    var role = 'Employee';
    return role
    };

}

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
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school= school;
    }
    getSchool(){
        return this.school
    }
}



module.exports = Employee;





