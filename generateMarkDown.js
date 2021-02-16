const fs = require('fs')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//take in array of objects
const employeePool = []
const newManager = new Manager('John','123','email','33d')
const newIntern = new Intern('John','123','email','GVSU')
const newEngineer = new Engineer('John','123','email','devontehillman')
employeePool.push(newManager)
employeePool.push(newIntern)
employeePool.push(newEngineer)
// render the string through a switch statement 
// write the html page