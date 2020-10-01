const inquirer = requirer("inquirer");
const fs = require("fs");



// array of questions for user
const questions = [
    {
        type:"input",
        message:"What is the project title?",
        name:"Title",
    },
    {
        type:"input",
        message:"Describe the project briefly",
        name:"description",
    },
    {
        type:"input",
        message:"What are the installation steps?",
        name:"instruction",
    },
    {
        type:"input",
        message:"What can this project be used for?",
        name:"usage",
    },
    {
        type:"list",
        message:"What is the license for this project?",
        name:"licence",
    },
    {
        type:"input",
        message:"Who has contributed to this project?",
        name:"contributers",
    },
    {
        type:"input",
        message:"Describe the test instructions",
        name:"tests",
    },
    {
        type:"input",
        message:"What is your github username?",
        name:"username",
    },
    {
        type:"input",
        message:"Enter your email:",
        name:"email",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err) => {
        if (err) {
            return console.log(err);
        }
        console.log("ReadMe has been generated")
    }
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
