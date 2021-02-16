const inquirer = require('inquirer')
const Employee = require("./lib/employee");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employeePool = []
let onOff = true

//prompt for user input

// what type of employee would add

// prompts for the specific employees 
function newEmployee () {
inquirer.prompt([
    {
    type: 'list',
    name: 'employeeType',
    choices: ['Manager','Engineer','Intern']
    },
]).then((data) =>{
    data.employeeType
    switch(data.employeeType) {
        case 'Manager':
            setInfoManager()
        break;
        case 'Engineer':
            setInfoEngineer()
        break;
        case 'Intern':
            setInfoIntern()
        break;
    }
});
}

function setInfoManager(){
    inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    question:'Manager name'
    },
    {
    type: 'input',
    name: 'id',
    question:'Manager ID'
    },
    {
    type: 'input',
    name: 'email',
    question:'Manager Email'
    },
    {
    type: 'input',
    name: 'officeNum',
    question:'Manager Office Number'
    },
    ]).then((data) =>{
    const manager =  new Manager(data.name,data.id,data.email,data.officeNum)
    
    employeePool.push(manager)
    console.log(employeePool)
    restart()
    });
};
function setInfoEngineer(){
    inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    question:'Engineer name'
    },
    {
    type: 'input',
    name: 'id',
    question:'Engineer ID'
    },
    {
    type: 'input',
    name: 'email',
    question:'Engineer Email'
    },
    {
    type: 'input',
    name: 'gitHub',
    question:'Engineer Github username'
    },
    ]).then((data) =>{
    const engineer =  new Engineer(data.name,data.id,data.email,data.gitHub)
    employeePool.push(engineer)
    console.log(employeePool)
    restart()
        });
};
function setInfoIntern(){
    inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    question:'Intern name'
    },
    {
    type: 'input',
    name: 'id',
    question:'Intern ID'
    },
    {
    type: 'input',
    name: 'email',
    question:'Intern Email'
    },
    {
    type: 'input',
    name: 'school',
    question:'Intern School'
    },
    ]).then((data) =>{
    const intern =  new Intern(data.name,data.id,data.email,data.school)
    employeePool.push(Intern)
    console.log(employeePool)
    restart()
    });
};

function restart(){
inquirer.prompt([
    {
    type: 'confirm',
    name: 'newEmployee',
    }]).then((data)=>{
    onOff = data.newEmployee
    if (onOff === true){
        newEmployee()
    }else{
        //compose html page 
        console.log(employeePool)

        return
    }
    })
}

//newEmployee()
const newManager = new Manager('John','123','email','33d')
const newIntern = new Intern('John','123','email','GVSU')
const newEngineer = new Engineer('John','123','email','devontehillman')
employeePool.push(newManager)
employeePool.push(newIntern)
employeePool.push(newEngineer)
console.log(employeePool[2].getRole())


