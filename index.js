const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile)
//const generatereadme = require("./utils/generateMarkdown")

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
        type:"input",
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
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("ReadMe has been generated")
//     }
// 
// function to prompt user
function promptuser(){
    return inquirer.prompt(questions)
}
// function to create readme template:
function generatereadme(answers){
    return  `
    #${answers.Title} 
    ##Table of Contents
    -[Description](#Description)
    -[Installation](#Installation Instructions)
    -[Usage](#Usage)
    -[License](#License)
    -[Contributers](#Contributers)
    -[Tests](#Tests)
    -[Contact ME](#Contact Me)
    ##Description
    ${answers.description} 
    ##Installation Instructions
    ${answers.instruction}
    ##Usage
    ${answers.usage}
    ##License
    ${answers.license}
    ##Contributers
    ${answers.contributers}
    ##Tests
    ${answers.tests}
    #Contact Me
    ##Github
    ${answers.username}
    ##Email
    ${answers.email}
  `
}
// // function to initialize program
async function init() {
    try{
        const answers = await promptuser();
        const readme= await generatereadme(answers);
        await writeFileAsync("ReadMe.MD", readme);
        console.log ("Success!")
    }catch(err){
        console.log(err)
    }
}
init();
// // function call to initialize program
// init();
