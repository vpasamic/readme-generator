const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile)
const generatereadme = require("./utils/generateMarkdown")

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
        name:"license",
        choices: [
            "Apache-2.0",
            "MIT",
            "ISC",
            "NTP"
        ]
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
//function for inquirer prompt
function promptuser(){
    return inquirer.prompt(questions)
}
// function to initialize program
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


// function call to initialize program
init();
