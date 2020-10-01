// function to generate markdown for README
function generateMarkdown(answers) {
  return  `
  # ${answers.Title} 

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributers](#Contributers)
  - [Tests](#Tests)
  - [Contact](#Contact)

  ## Description
  ${answers.description} 

  ## Installation
  ${answers.instruction}

  ## Usage
  ${answers.usage}

  ## License
  [![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license}

  ## Contributers
  ${answers.contributers}

  ## Tests
  ${answers.tests}
  
  ## Contact
  ### Github
  [${answers.username}](https://github.com/${answers.username})
 
  ### Email
  Email me at ${answers.email}
`
}

module.exports = generateMarkdown;
