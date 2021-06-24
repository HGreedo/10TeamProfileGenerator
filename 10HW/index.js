const Manager = require("./directory/Manager");
const Engineer = require("./directory/Engineeer");
const Intern = require("./directory/Intern");
const Employee = require("./directory/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT, "team.html");

const render = require("./src/htmltemplate");

//to hold team
const team = [];
//to hold according team id's
const idArray = [];

function menu() {

    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter the Manager's name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "They have to have a name!";
                }
            },
            {
                type: "input",
                name: "managerID",
                message: "Please enter the Manager's ID",
                validate: answer => {
                    const ifValid = answer.match (  /^[1-9]\d*$/ );
                    if (ifValid) {
                        return true;
                    }
                    return "They have to have an ID number!";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter the Manager's Email Address",
                validate: answer => {
                    const ifValid = answer.match (  /\S+@\S+\.\S+/ );
                    if (ifValid) {
                        return true;
                    }
                    return "They have to have an Email!";
                }
            },
            {
                type: "input",
                name: "managegerOfficeNumber",
                message: "Please enter the Manager's Office Number",
                validate: answer => {
                    const ifValid = answer.match (  /^[1-9]\d*$/ );
                    if (ifValid) {
                        return true;
                    }
                    return "They have to have an Office!";
                }
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail);
            team.push(manager);
            idArray.push(answers.managerID);
            inquirer.prompt([])
        });
    }
    function createEntireTeam() {

        inquirer.prompt([
            {
                type: "list",
                neme: "employeeChoice",
                message: "Which employee would you like to add next?",
                choices: [
                    "Employee",
                    "Engineer",
                    "Intern",
                ]
            }
        ]).then(userChoice => {
            switch(userChoice.employeeChoice) {
                case "Employee":
                    addEmployee();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default: 
                    buildTeam();
            }
        });
    }

    function addEmployee() {
        inquirer.prompt([
            {
                type: "input",
                name: "employeeName",
                message: "Please enter the Employee's name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "They have to have a name!";
                }
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the Employee's ID",
                validate: answer => {
                    const ifValid = answer.match (  /^[1-9]\d*$/ );
                    if (ifValid) {
                        return true;
                    }
                    return "They have to have an ID number!";
                }
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "Please enter the Employee's Email Address",
                validate: answer => {
                    const ifValid = answer.match (  /^[1-9]\d*$/ );
                    if (ifValid) {
                        return true;
                    }
                    return "They have to have an Email!";
                }
            },
            
        ]).then(answers => {
            const employee = new Employee(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.employeeOfficeNumber);
            team.push(employee);
            idArray.push(answers.employeeID);
            createEntireTeam();
          });
    }
 
    function addEngineer() {
        inquire.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Please enter the Engineer's name",
                validate: answer => {
                    if (answer !== "") { return true; }
                    return "The engineer must have a name!";
                }
            },
            {
                type: "input",
                name: "engineerID",
                message: "Please en the Engineer's ID number",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                      );
                      if (pass) {
                        if (idArray.includes(answer)) {
                          return "You have entered in an incorrect ID number. Please Try again";
                        } else {
                          return true;
                        }
                      }
                      return "The Engineer must have an ID number!";
                    }  
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter the Engineer's email address",
                validate: answer => {
                    const pass = answer.match(
                      /\S+@\S+\.\S+/
                    );
                    if (pass) {
                      return true;
                    }
                    return "You have entered an incorrect email address. Please tru again";
                  }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter the Engineer's Github username",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "The Engineer must have a Github username!";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.employeeName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            team.push(engineer);
            idArray.push(answers.engineerID);
            createEntireTeam();
        });
    }
        function addIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "Please enter the Intern's name",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "They have to have a name!";
                    }
                },
                {
                    type: "input",
                    name: "internID",
                    message: "Please enter the Intern's ID",
                    validate: answer => {
                        const ifValid = answer.match (  /^[1-9]\d*$/ );
                        if (ifValid) {
                            return true;
                        }
                        return "They have to have an ID number!";
                    }
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Please enter the Intern's Email Address",
                    validate: answer => {
                        const ifValid = answer.match (  /^[1-9]\d*$/ );
                        if (ifValid) {
                            return true;
                        }
                        return "They have to have an Email!";
                    }
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What school did the Intern go to?",
                    validate: answer => {
                      if (answer !== "") {
                        return true;
                      }
                      return "How did we hire an intern that didn't go to school?";
                    }
                  }
            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internID, answers.interEmail, answers.internSchool);
                team.push(intern);
                idArray.push(answers.internID);
                createEntireTeam();
              });
        }

        function buildTeam(){
            if(!fs.existsSync(OUTPUT)) {
                fs.mkdirSync(OUTPUT)
            } fs.writeFileSync(outputPath, render (team), "utf8")
        }
    createManager();
    }
    menu();

