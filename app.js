const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

function mainMenu() {
    function createManager() {
        console.log("Please build your team");
        inquirer.prompt([{
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name"

            }
        }])
        inquirer.prompt([{
            type: "input",
            name: "managerID",
            message: "What is your manager's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an ID"

            }
        }])

        inquirer.prompt([{
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an email address"

            }
        }])

        inquirer.prompt([{
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your manager's office number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an office number"

            }
        }])

            .then(answer => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
                teamMembers.push(manager)
                idArray.push(answers.managerId)

            })
    }

    createManager()





    function createTeam() {
        inquirer.prompt([{
            type: "list",
            name: "managerChoice",
            message: "What type of team member do you want to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more"
            ]
        }]).then(userChoice => {
            switch (userChoice.memberChoice) {
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

    function addIntern() {
        inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "Enter intern's name",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a name";
            }
        },
        {
            type: "input",
            name: "internID",
            message: "Enter intern's ID",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an ID";
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter intern's email",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an email";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter intern's school",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter an school";
            }
        }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
          });



    };
}



createManager()







mainMenu()






// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
