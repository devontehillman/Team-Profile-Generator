const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateMarkDown = require("./generateMarkDown");

const employeePool = [];
let onOff = true;

//prompt for user input

// what type of employee would add

// prompts for the specific employees
function newEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeType",
                choices: ["Manager", "Engineer", "Intern"],
            },
        ])
        .then((data) => {
            data.employeeType;
            switch (data.employeeType) {
                case "Manager":
                    setInfoManager();
                    break;
                case "Engineer":
                    setInfoEngineer();
                    break;
                case "Intern":
                    setInfoIntern();
                    break;
            }
        });
}

function setInfoManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                question: "Manager name",
            },
            {
                type: "input",
                name: "id",
                question: "Manager ID",
            },
            {
                type: "input",
                name: "email",
                question: "Manager Email",
            },
            {
                type: "input",
                name: "officeNum",
                question: "Manager Office Number",
            },
        ])
        .then((data) => {
            const manager = new Manager(
                data.name,
                data.id,
                data.email,
                data.officeNum
            );

            employeePool.push(manager);
            console.log(employeePool);
            restart();
        });
}
function setInfoEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                question: "Engineer name",
            },
            {
                type: "input",
                name: "id",
                question: "Engineer ID",
            },
            {
                type: "input",
                name: "email",
                question: "Engineer Email",
            },
            {
                type: "input",
                name: "gitHub",
                question: "Engineer Github username",
            },
        ])
        .then((data) => {
            const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.gitHub
            );
            employeePool.push(engineer);
            console.log(employeePool);
            restart();
        });
}
function setInfoIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                question: "Intern name",
            },
            {
                type: "input",
                name: "id",
                question: "Intern ID",
            },
            {
                type: "input",
                name: "email",
                question: "Intern Email",
            },
            {
                type: "input",
                name: "school",
                question: "Intern School",
            },
        ])
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            employeePool.push(Intern);
            console.log(employeePool);
            restart();
        });
}

function restart() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "newEmployee",
            },
        ])
        .then((data) => {
            onOff = data.newEmployee;
            if (onOff === true) {
                newEmployee();
            } else {
                generateMarkdown();
                return;
            }
        });
}

function generateCards() {
    let arryToReturn = [];
    // render each card
    for (i = 0; i < employeePool.length; i++) {
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
    </div>`
        );
    }
    return arryToReturn.join("");
}

//function to get role and special identifier
function specialID(currentEmployee) {
    let specialAttribute;
    switch (currentEmployee.getRole()) {
        case "Manager":
            specialAttribute = "Office Number: " + currentEmployee.officeNumber;
            break;
        case "Engineer":
            specialAttribute = "Github: " + currentEmployee.gitHub;
            break;
        case "Intern":
            specialAttribute = "School: " + currentEmployee.school;
            break;
    }
    return specialAttribute;
}

// write the html page
function generateHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Blank</title>
    
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
          <a class="navbar-brand" href="index.html">Portfolio Title</a>
    
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div
            class="collapse navbar-collapse navbar-right"
            id="navbarSupportedContent"
          >
            <ul class="nav navbar-nav navbar-right mr-auto"></ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item active">
                <a class="nav-link" href="index.html"
                  >Home <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact Me</a>
              </li>
            </ul>
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
    `;
}

function generateMarkdown() {
    const file = generateHTML();

    fs.writeFile("Index.html", file, (err) =>
        err ? console.log(err) : console.log("Success!")
    );
    module.exports = generateHTML;
}

newEmployee();
