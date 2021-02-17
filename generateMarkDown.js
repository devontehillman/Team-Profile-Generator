const fs = require('fs')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Script = require('./script')

//take in array of objects
const employeePool = Script
//console.log(employeePool)
// const newManager = new Manager('Steve','12','email','33d')
// const newIntern = new Intern('Sara','13','email','GVSU')
// const newEngineer = new Engineer('Lewis','14','email','devontehillman')
// employeePool.push(newManager)
// employeePool.push(newIntern)
// employeePool.push(newEngineer)
// // console.log(employeePool[0])
// // console.log(employeePool[1])
// // console.log(employeePool[2])
// //console.log(employeePool)

function generateCards(){

let arryToReturn = []
// render each card  
for (i = 0; i < employeePool.length; i++){
    arryToReturn.push(
    `<div class="col-md-4">
    <div class="card text-black shadow">
    <div class="card-header bg-primary text-white">
    ${employeePool[i].name}
    <p class="card-text">${employeePool[i].getRole()}</p>
    </div>
    <div class="card-body">
        <p class="card-text">ID:${employeePool[i].id}</p>
        <p class="card-text">Email:${employeePool[i].email}</p>
        <p class="card-text">${specialID(employeePool[i])}</p>
    </div>
    </div>
    </div>`)
} 
return arryToReturn.join('')
}
//function to get role and special identifier 
function specialID(currentEmployee){
    let specialAttribute 
    switch(currentEmployee.getRole()) {
        case 'Manager':
            specialAttribute = 'Office Number: ' + currentEmployee.officeNumber;
        break;
        case 'Engineer':
            specialAttribute = 'Github: ' + currentEmployee.gitHub;
        break;
        case 'Intern':
            specialAttribute = 'School: ' + currentEmployee.school;
        break;
    }
return specialAttribute
}
// write the html page
function generateHTML(){
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Dev Team</title>
    
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css" />
        <script
          src="https://kit.fontawesome.com/c26610a7c1.js"
          crossorigin="anonymous"
        ></script>
      </head>
    
      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="index.html">My Dev Team</a>
    
          <div
            class="collapse navbar-collapse navbar-right"
            id="navbarSupportedContent"
          >
        <ul class="nav navbar-nav navbar-right mr-auto"></ul>
          </div>
        </nav>
    
        <div class="container">
          <div class="jumbotron">
            <div class="row Justify-content-center" id="cards">
          ${generateCards()}
          </div>
        </div>
    
        <!-- <footer>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">Portfoio Title</a>
          </nav>
        </footer> -->
    
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
    `
}


const file = generateHTML()

fs.writeFile('Index.html', file , (err) =>
    err ? console.log(err) : console.log('Success!'));
module.exports = generateHTML;


