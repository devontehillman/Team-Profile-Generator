const inquirer = require('inquirer')
//const fs = require('')

class Employee {
    constructor(name, id, email, role){
    this.name = name; 
    this.id = id; 
    this.email = email;
    this.role = role;
    }

    //name = getName(){};
    // id = getId(){};
    // email = getEmail(){};
    // role = getRole(){};
}


inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'Enter Employees name',
    },
]).then((data) =>{
    let e = []
//    let e[i] = new Employee

});


// class Manager extends  Employee (){
//     constructor(officeNumber){
//      super(name, id, email, role)
//}
//     getRole()

// }

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

// The first class is an `Employee` parent class with the following properties and methods:

//  `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`