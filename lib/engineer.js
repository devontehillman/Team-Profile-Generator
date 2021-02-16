const Employee = require("./employee")

class Engineer extends Employee{
    constructor(name, id, email,gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGithub(){
        return this.gitHub
    }
    getRole(){
    var role = 'Engineer';
    return role
    };
}


module.exports = Engineer;

const questions = ['Github username']

const newEngineer = new Engineer('John','123','email','devontehillman')
//console.log(newEngineer.getRole())